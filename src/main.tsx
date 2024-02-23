import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/routes.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProviderComponent from "./Contexts/AuthProviderComponent.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-photo-view/dist/react-photo-view.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviderComponent>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviderComponent>
    </QueryClientProvider>
  </React.StrictMode>
);
