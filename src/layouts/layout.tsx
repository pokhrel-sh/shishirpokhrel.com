import React from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-green-50 h- min-h-screen">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};



export default Layout;