import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

const TaskListPage = lazy(() => import('./TaskListPage/TaskListPage'));
const TaskPage = lazy(() => import('./TaskPage/TaskPage'));

enum Path {
  TaskList = '/tasks',
  Task = '/task/:taskId',
}

const ROUTELIST = [
  { key: 'task', path: Path.Task, Page: TaskPage },
  { key: 'tasks', path: Path.TaskList, Page: TaskListPage },
];

export const Routing = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        {ROUTELIST.map(({ key, path, Page }) => (
          <Route key={key} path={path} element={<Page />} />
        ))}
      </Routes>
    </Suspense>
  );
};
