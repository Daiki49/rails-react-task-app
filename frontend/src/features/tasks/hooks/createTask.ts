import { Task, TaskFormData } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const createTask = (taskData: TaskFormData): Promise<Task> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newTask: Task = {
        ...taskData,
        id: mockTasks.length + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: false,
      };
      mockTasks.push(newTask);
      resolve(newTask);
    }, 500);
  });
};
