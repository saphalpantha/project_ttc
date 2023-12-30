













import { getDb } from "../../../../ttc_db";



const handler = async (req, res) => {
  if (req.method === "PUT") {
    try {
      const { dataArray } = req.body; 

      if (!dataArray || !Array.isArray(dataArray)) {
        res.status(400).json({ msg: 'Invalid request body' });
        return;
      }


      const db = await getDb();

      try {
        for (const item of dataArray) {
          const { id, active } = item;

          const response = await db.query(`UPDATE slider_data SET active = '${+active}' WHERE id = '${id}'`);
        }

        res.status(200).json({ msg: 'Updated' });
      } catch (err) {
        console.log(err);
        res.status(404).json({ msg: 'Failed to Update  Fields' });
      }

      // Close the database connection
      db.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Internal Server Error' });
    }
  }
};


export default handler;
