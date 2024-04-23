import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLogin from './Pages/userLogin';
import RegisterPage from './Pages/Registerpage';
import { ProductsAddPage } from "./Pages/ProductsAddPage";
import { OrdersAddPage } from "./Pages/OrdersAddPage";
import { DashboardOrderAddPage } from "./Pages/DashboardOrderAddPage";
import { ProductsEditPage } from "./Pages/ProductsEditPage";
import { OrdersEditPage } from "./Pages/OrdersEditPage";
import { DashboardProductAddPage } from './Pages/DashboardProductAddPage';
import Dashboard from "./Pages/dashboard-sidebar";
import DashboardProducts from './Pages/dashboard-products';
import DashboardOrders from './Pages/dashboard-orders';
import DashboardUsers from './Pages/dashboard-users';

const router = createBrowserRouter([
  {path: "/", element: <UserLogin/>},
  {path: "/register", element: <RegisterPage/>},
  { path: "/product", element: <DashboardProductAddPage /> },
  { path: "/order", element: <DashboardOrderAddPage /> },
  { path: "/product/add", element: <ProductsAddPage /> },
  { path: "/product/:id/edit", element: <ProductsEditPage /> },
  { path: "/order/:id/edit", element: <OrdersEditPage /> },
  { path: "/order/add", element: <OrdersAddPage /> },
  {path: "/dashboard", element: <Dashboard />},
  {path: "/products", element: <DashboardProducts />},
  {path: "/orders", element: <DashboardOrders />},
  {path: "/users", element: <DashboardUsers />},

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
