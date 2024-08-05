import type { NextApiRequest, NextApiResponse } from 'next';
import { updateTask } from '../../modules/taskManager';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { taskId, updatedTask } = req.body;
    if (typeof taskId === 'number' && typeof updatedTask === 'object') {
      updateTask(taskId, updatedTask);
      res.status(200).json({ message: 'Task updated successfully' });
    } else {
      res.status(400).json({ error: 'Invalid data' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}