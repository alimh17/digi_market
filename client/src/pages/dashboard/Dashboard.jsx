import React from "react";
import { ToastProvider } from "react-toast-notifications";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Dashboard = () => {
  return (
    <ToastProvider placement="top-right">
      <Navbar />
      <Main />
    </ToastProvider>
  );
};

export default Dashboard;
