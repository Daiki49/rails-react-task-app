import { api } from "../../../shared/utils/api";
export const deleteTask = (id: string) => api<void>(`/api/tasks/${id}`, { method: "DELETE" });
