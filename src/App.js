// App.js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Products from './components/products/Products';
import About from './pages/About';
import Home from './pages/Home';
import AppProvider from './store/AppProvider';
import Store from './pages/Store';


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
  },
  {
  path:'/store',
    element:(
<AppProvider>
        <Header />
        <Store/>
      </AppProvider>
    ),
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
