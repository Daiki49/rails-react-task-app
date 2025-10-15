import { api } from "../../../shared/utils/api";
export const deleteTask = (id: string) => api<void>(`/tasks/${id}`, { method: "DELETE" });
