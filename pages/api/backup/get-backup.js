import JSZip from 'jszip';
import fs from 'fs';
import path from 'path';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const currentDate = new Date();
      const zipFileName = `backup-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getSeconds()}.zip`;
      const zip = new JSZip();

      const publicFolder = path.join(process.cwd(), 'public');

      // Check if the 'public' folder exists
      if (!fs.existsSync(publicFolder)) {
        return res.status(500).json({ error: 'Public folder not found' });
      }

      const files = fs.readdirSync(publicFolder, { recursive: true });
      for (const file of files) {
        const filePath = path.join(publicFolder, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
          const fileData = fs.readFileSync(filePath);
          zip.file(file, fileData);
        }
      }

      const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

      res.setHeader('Content-Type', 'application/zip');
      res.setHeader('Content-Disposition', `attachment; filename="${zipFileName}"`);
      res.write(zipContent, 'binary');
      res.end(null, 'binary');
    } catch (err) {
      console.error('Error creating backup:', err);
      res.status(500).json({ error: 'Failed to create backup' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
