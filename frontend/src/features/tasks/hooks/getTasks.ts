import { Task } from "../../../types/task";
import { mockTasks } from "../mocks/task";

export const getTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockTasks]));
  });
};
