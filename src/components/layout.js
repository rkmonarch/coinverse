import React from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mx-auto max-w-full min-h-[100vh]">
        <Sidebar />
        <div className="w-full min-h-[100vh] pl-[120px] pr-[60px]">
          <Navbar />
          <div className="pt-[20px]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
