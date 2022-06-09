import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastProvider } from "react-toast-notifications";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  const queryClient = new QueryClient();

  return (
    <ToastProvider placement="top-right">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Main />
      </QueryClientProvider>
    </ToastProvider>
  );
};

export default Dashboard;
