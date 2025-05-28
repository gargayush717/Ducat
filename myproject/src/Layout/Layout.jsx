import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h2 style={{ marginTop: "100px" }}>Layout</h2>
      <Outlet />
    </>
  );
};

export default Layout;
