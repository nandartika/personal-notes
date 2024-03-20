import React from "react";
import NavigationApp from "../components/NavigationApp";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <>
      <header>
        <NavigationApp />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainContainer;
