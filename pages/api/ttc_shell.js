
import { execSync } from 'child_process';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ error: 'Command is required' });
  }

  try {
    const output = execSync(command, { encoding: 'utf-8' });

    const filtered = output.split(/\r?\n/).filter(e => e !== '');
    res.status(200).json({ output: filtered });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
