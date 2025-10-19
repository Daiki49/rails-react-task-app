import { api } from "../../../shared/utils/api";
import { Task, TaskFormData } from "../../../types/task";
export const createTask = async (form: TaskFormData): Promise<Task> => {
  const payload = {
    task: {
      ...form,
      due_date: form.dueDate,
    },
  };
  const t = await api<any>("/api/tasks", { method: "POST", body: JSON.stringify(payload) });
  return {
    id: t.id, title: t.title, description: t.description, priority: t.priority,
    dueDate: t.due_date, status: t.status, createdAt: t.created_at, updatedAt: t.updated_at,
  };
};
