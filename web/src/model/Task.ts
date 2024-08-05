interface Task {
  id: number;
  title: string;
  description: string;
  persona: string;
  status: 'active' | 'completed' | 'pending';
  group: number;
}

export default Task;
