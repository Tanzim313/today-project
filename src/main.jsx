import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Index from "./component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

const router = createBrowserRouter([

  {
    path:"/",
    element:<Index/>
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
        <RouterProvider router={router} />
    
    </QueryClientProvider>
    
    
  </StrictMode>
);