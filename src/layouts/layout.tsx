import React from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="bg-green-50 h-full min-h-screen">
      <Navbar />
    </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;