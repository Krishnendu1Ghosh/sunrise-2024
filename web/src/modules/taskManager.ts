import Task from "@/model/Task";
import { initialTasks } from "@/utils/TaskList";

let tasks: Task[] = [...initialTasks];

export function initializeTasks() {
    tasks.push({ id: 1, title: 'First Task', description: '', persona: '', status: 'active', group: 1 });
}

export function getActiveTasks(): Task[] {
    return tasks.filter(task => task.status === 'active');
}

export function getCompletedTasks(): Task[] {
    return tasks.filter(task => task.status === 'completed');
}

export function getAllTasks(): Task[] {
    return tasks;
}

export function completeTask(taskTitle: string): void {
    const task = tasks.find(task => task.title === taskTitle);
    if (task && task.status === 'active') {
        task.status = 'completed';
        const nextTaskGroup = task.group + 1;
        const nextTask = tasks.find(t => t.group === nextTaskGroup && t.status === 'pending');
        if (nextTask) {
            nextTask.status = 'active';
        }
    }
}

export function createTask(title: string, description: string, persona: string, group: number): void {
    const newTask: Task = { id: tasks.length + 1, title, description, persona, status: 'pending', group };
    tasks.push(newTask);
}

export function updateTask(taskId: number, updatedTask: Partial<Omit<Task, 'id'>>): void {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        Object.assign(task, updatedTask);
    }
}

export function deleteTask(taskId: number): void {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}
