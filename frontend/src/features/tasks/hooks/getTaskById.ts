import { Task } from "../../../types/task";
import { api } from "../../../shared/utils/api"; // パスは環境に合わせて

// 404 の場合は null を返す
export const getTaskById = async (id?: string): Promise<Task | null> => {
  if (!id) return null;
  try {
    const t = await api<any>(`api/tasks/${id}`);
    // snake_case → camelCase に変換
    return {
      id: t.id,
      title: t.title,
      description: t.description,
      priority: t.priority,
      dueDate: t.due_date,
      status: t.status,
      createdAt: t.created_at,
      updatedAt: t.updated_at,
    };
  } catch (e: any) {
    const msg = String(e?.message || "");
    if (msg.startsWith("404")) return null;
    throw e;
  }
};
