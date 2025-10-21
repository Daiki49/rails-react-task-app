import { api } from "../../../shared/utils/api";
import { Task } from "../../../types/task";

export const getTasks = async (): Promise<Task[]> => {
  const data = await api<any[]>("api/tasks");
  // Railsのキー名と揃える変換（snake→camel）
  return data.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    priority: t.priority,
    dueDate: t.due_date,
    status: t.status,
    createdAt: t.created_at,
    updatedAt: t.updated_at,
  }));
};
