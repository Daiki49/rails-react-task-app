import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TaskListPage from "./pages/tasks/taskListPage";
import TaskDetailPage from "./pages/tasks/taskDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} />
      <Route path="/tasks/:id" element={<TaskDetailPage />} />
    </Routes>
  );
}

export default App;
