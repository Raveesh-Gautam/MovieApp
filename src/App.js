// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Products from './components/products/Products';
import About from './pages/About';
import AppProvider from './store/AppProvider';
import Home from './pages/Home';

const Layout = () => (
  <AppProvider>
    <Header />
    <Products />
    <Cart />
  </AppProvider>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/about',
    element: (
      <AppProvider>
        <Header />
        <About />
      </AppProvider>
    ),
  },
  {
    path:'/home',
    element:(
<AppProvider>
        <Header />
        <Home/>
      </AppProvider>
    ),
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
