import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Headphones, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
          Creating unique soundscapes for artists and content creators
          worldwide.
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-black p-8 rounded-xl shadow-lg"
        >
          <Headphones className="w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Browse Beats</h2>
          <p className="text-gray-300 mb-6">
            Explore a collection of high-quality beats for your next project.
          </p>
          <Link
            to="/beats"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Listen Now
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-black p-8 rounded-xl shadow-lg"
        >
          <Mail className="w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Looking for custom beats or collaborations? Let's work together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
