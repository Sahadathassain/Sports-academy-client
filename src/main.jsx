import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
import router from "./Routes/Routes";
import { UserProvider } from "./hooks/UserContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <UserProvider>
    <AuthProvider>
        <div className="">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </UserProvider>
      
    </QueryClientProvider>
  </React.StrictMode>
);