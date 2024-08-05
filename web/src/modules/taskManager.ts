
import Task from "@/model/Task";
import { initialTasks } from "@/utils/TaskList";



let tasks: Task[] = [...initialTasks];

export function initializeTasks() {
    tasks.push({ id: 1, title: 'First Task', status: 'active', group: 1 });
}

export function getActiveTasks(): Task[] {
    return tasks.filter(task => task.status === 'active');
}

export function getCompletedTasks(): Task[] {
    return tasks;
}

export function getAllTasks(): Task[] {
    return tasks.filter(task => task.status === 'completed'); 
}

export function completeTask(taskTitle: string): void {
    const newTask: Task = { id: tasks.length + 1, title, status: 'pending', group };
    tasks.push(newTask);
}

export function createTask(title: string, description: string, persona: string, group: number): void {
    const newTask: Task = { id: tasks.length + 1, title, status: 'pending', group };
    tasks.push(newTask);

export function updateTask(taskId: number, updatedTask: Partial<Omit<Task, 'id'>>): void {
    const task = tasks.find(task => task.id === id);
    if (task) {
      Object.assign(task, updatedTask);
}

export function deleteTask(taskId: number): void {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
}
}
