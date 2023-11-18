import { Outlet, createBrowserRouter } from "react-router-dom";
import {
  Menu,
  Communities,
  Dashboard,
  Menus,
  Home,
  Orders,
  Polls,
  ThreeHours,
  Waiters,
  SignUp,
  Login,
  Category,
  AdminDashboard,
  AdminOrders,
  AdminManagers,
  AdminMusic,
  ManagerLayout,
  DJUserLayout,
  AdminLayout,
  Layout,
  AdminWaiter,
  Users,
  AdminMenus,
  Billings,
  TableBillings,
  OrderHistory,
  AddPolls,
  AdminPolls,
  AttendeceLogs,
  WaiterOrder,
  ManagerPolls,
  Table,
  AdminBillingHistory,
  Restaurant,
  MusicHistory,
} from "../../src/views";
import { DJUser } from "../views/dj-user";
import { NotFound } from "../components";
import {
  ProtectedAdminRoute,
  ProtectedDJUserRoute,
  ProtectedEmployeeRoute,
  ProtectedMangaerRoute,
} from "../protected-route";
import { OrderFood, OrderMenu } from "../views/manager";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/sign-up",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "order-history/:id",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <OrderHistory />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "three-hours",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ThreeHours />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "menu",
    element: <Layout isDark />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "polls",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Polls />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "category",
    element: <Layout isDark />,
    children: [
      {
        index: true,
        element: <Category />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "communities",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Communities />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Manager
  {
    path: "dashboard",
    element: (
      <ProtectedMangaerRoute>
        <ManagerLayout />
      </ProtectedMangaerRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/billings/:id",
        element: <TableBillings />,
      },
      {
        path: "/dashboard/table",
        element: <Table />,
      },
      {
        path: "/dashboard/polls",
        element: <ManagerPolls />,
      },
      {
        path: "/dashboard/polls/add",
        element: <AddPolls />,
      },

      {
        path: "/dashboard/menus",
        element: <Menus />,
      },
      {
        path: "/dashboard/waiter",
        element: <Waiters />,
      },
      {
        path: "/dashboard/waiter/:id",
        element: <WaiterOrder />,
      },
      {
        path: "/dashboard/waiter/attendance/:id",
        element: <AttendeceLogs />,
      },

      {
        path: "/dashboard/billings",
        element: <Billings />,
      },
      {
        path: "/dashboard/music",
        element: <DJUser />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Admin
  {
    path: "admin-dashboard",
    element: (
      <ProtectedAdminRoute>
        <AdminLayout />
      </ProtectedAdminRoute>
    ),

    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "/admin-dashboard/orders",
        element: <AdminOrders />,
      },
      {
        path: "/admin-dashboard/mangers",
        element: <AdminManagers />,
      },
      {
        path: "/admin-dashboard/musics",
        element: <AdminMusic />,
      },
      {
        path: "/admin-dashboard/musics/:id",
        element: <MusicHistory />,
      },

      {
        path: "/admin-dashboard/mangers/:id",
        element: <AdminWaiter />,
      },
      {
        path: "/admin-dashboard/billings",
        element: <AdminBillingHistory />,
      },
      {
        path: "/admin-dashboard/billings/:id",
        element: <TableBillings fromAdmin />,
      },
      {
        path: "/admin-dashboard/users",
        element: <Users />,
      },
      {
        path: "/admin-dashboard/menus",
        element: <AdminMenus />,
      },
      {
        path: "/admin-dashboard/restaurant",
        element: <Restaurant />,
      },

      {
        path: "/admin-dashboard/polls",
        element: <AdminPolls />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Dj Admin
  {
    path: "music-list",
    element: (
      <ProtectedDJUserRoute>
        <DJUserLayout />
      </ProtectedDJUserRoute>
    ),
    children: [
      {
        index: true,
        element: <DJUser />,
      },
    ],
    errorElement: <NotFound />,
  },

  // Employee

  {
    path: "employee",
    element: (
      <ProtectedEmployeeRoute>
        <ManagerLayout isEmployee />
      </ProtectedEmployeeRoute>
    ),
    children: [
      {
        index: true,
        element: <Orders />,
      },
      {
        path: "/employee/billings",
        element: <Billings isEmployee />,
      },
      {
        path: "/employee/food-order",
        element: <OrderFood isEmployee />,
      },
      {
        path: "/employee/billings/:id",
        element: <TableBillings isEmployee />,
      },
      {
        path: "/employee/menu",
        element: <OrderMenu isEmployee />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
