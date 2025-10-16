import React from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Layout from "../pages/layout/Layout"
import LoginPage from "../pages/auth/LoginPage";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: React.createElement(Layout),
    errorElement: React.createElement(NotFound),
    children: [
      {
        index: true,
        element: React.createElement(HomePage),
      },
      {
        path: "login",
        element: React.createElement(LoginPage),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
