import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../hooks/getTasks";
import { Task } from "../../../types/task";
import TaskCard from "../components/TaskCard";
import styles from "../styles/TaskListContainer.module.css";

export default function TaskListContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h1>タスク一覧</h1>

      {/* タスク作成ページへのリンクを追加 */}
      <div className={styles.taskListHeader}>
        <Link to="/tasks/new" className={styles.newTaskLink}>
          新規作成
        </Link>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <div>タスク名</div>
          <div>ステータス</div>
          <div>優先度</div>
          <div>期限日</div>
        </div>

        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
