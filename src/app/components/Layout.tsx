import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4 mt-4">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Ata Berk Yilmaz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
