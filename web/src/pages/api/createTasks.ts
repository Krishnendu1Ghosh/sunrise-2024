import type { NextApiRequest, NextApiResponse } from 'next';
import { createTask } from '../../modules/taskManager';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, persona, group } = req.body;
    if (typeof title === 'string' && typeof description === 'string' && typeof persona === 'string' && typeof group === 'number') {
      createTask(title, description, persona, group);
      res.status(201).json({ message: 'Task created successfully' });
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
