import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { reactRoute } from "./routes/reactRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={reactRoute}></RouterProvider>
);
