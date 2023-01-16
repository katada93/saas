import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

const TaskListPage = lazy(() => import('./TaskListPage/TaskListPage'));
const TaskPage = lazy(() => import('./TaskPage/TaskPage'));
const SignInPage = lazy(() => import('./AuthPages/SignInPage'));
const SignUpPage = lazy(() => import('./AuthPages/SignUpPage'));

enum Path {
  TaskList = '/tasks',
  Task = '/task/:taskId',
  SignIn = 'signIn',
  SignUp = 'signup',
}

const ROUTELIST = [
  { key: 'signup', path: Path.SignIn, Page: SignInPage },
  { key: 'signup', path: Path.SignUp, Page: SignUpPage },
  { key: 'task', path: Path.Task, Page: TaskPage },
  { key: 'tasks', path: Path.TaskList, Page: TaskListPage },
];

export const Routing = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        {ROUTELIST.map(({ key, path, Page }) => (
          <Route key={key} path={path} element={<Page />} />
        ))}
      </Routes>
    </Suspense>
  );
};
