import * as React from "react"; // Importing React for JSX usage
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Dashboard</div>,
  },
]);