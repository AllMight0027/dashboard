import React from "react";
import Sidebar from "./Sidebar";
import { content, contentBox, layoutContainer } from "./styles";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={layoutContainer}>
      <Sidebar
        avatar="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        name="John Watson"
        email="john.watson@auranft.co"
        isOnline={true}
      />
      <div className={content}>
        <div className={contentBox}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
