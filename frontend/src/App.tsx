import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TaskListPage from "./pages/tasks/taskListPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";
import TaskCreatePage from "./pages/tasks/taskCreatePage";
import TaskEditPage from "./pages/tasks/taskEditPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} />
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
      <Route path="/tasks/new" element={<TaskCreatePage />} />
      <Route path="/tasks/:id/edit" element={<TaskEditPage />} />
    </Routes>
  );
}

export default App;
