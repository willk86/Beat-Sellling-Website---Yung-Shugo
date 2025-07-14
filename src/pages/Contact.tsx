import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
      </div>

      <div className="space-y-6">
        <motion.a
          href="https://instagram.com/yungshugo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 bg-black p-6 rounded-xl hover:bg-gray-900 transition-colors"
        >
          <Instagram className="w-6 h-6 text-green-500" />
          <div>
            <h2 className="font-bold">Instagram</h2>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
