import { Route, Routes } from 'react-router-dom';
import UsersTest from '../components/UsersTest/UsersTest';
import AboutPage from '../pages/AboutPage';
import HelloTests from '../pages/HelloTests';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import Users from '../Users/Users';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users-test" element={<UsersTest />} />
      <Route path="/e2e" element={<HelloTests />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
