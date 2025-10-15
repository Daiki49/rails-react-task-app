import { api } from "../../../shared/utils/api";
import { TaskFormData } from "../../../types/task";

export const updateTask = async (id: string, patch: Partial<TaskFormData> | { status: boolean }) => {
  const payload: any = { task: { ...patch } };
  if ("dueDate" in (patch as any)) {
    payload.task.due_date = (patch as any).dueDate;
    delete payload.task.dueDate;
  }
  await api(`/tasks/${id}`, { method: "PATCH", body: JSON.stringify(payload) });
};
