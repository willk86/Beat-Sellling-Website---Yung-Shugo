import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center">
              {/* Clickable logo */}
              <a href="/">
                <img
                  src="logos/Yung Shugo logo white.png"
                  alt="Yung Shugo Logo"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </motion.div>

          <nav className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${
                  isActive ? "text-green-500" : "text-gray-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/beats"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${
                  isActive ? "text-green-500" : "text-gray-300"
                }`
              }
            >
              Beats
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-green-500 transition-colors ${
                  isActive ? "text-green-500" : "text-gray-300"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-black text-gray-400 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p>© {new Date().getFullYear()} Yung Shugo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
