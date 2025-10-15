import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../hooks/getTaskById";
import { Task } from "../../../types/task";
import TaskDetail from "../components/TaskDetail";
import styles from "../styles/taskDetail.module.css";
import TaskDeleteButton from "../components/TaskDeleteButton";

export default function TaskDetailContainer() {
  const { id } = useParams<{ id?: string }>();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchTask() {
      const fetchedTask = await getTaskById(id);
      setTask(fetchedTask ?? null);
    }
    fetchTask();
  }, [id]);

  if (!task) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
      >
        読み込み中...
      </div>
    );
  }

  return (
    <div className={styles.taskDetailContainer}>
      <TaskDetail task={task} />
      <div>
        <TaskDeleteButton id={id} />
      </div>
    </div>
  );
}
