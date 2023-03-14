import React from "react";
import HeaderComponent from "./HeaderComponent";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Signup from "../Signup/Signup";

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
      <Signup />
    </div>
  );
};

export default AppLayout;
