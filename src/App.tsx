import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Announcement from './components/Announcement';

const Layout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
