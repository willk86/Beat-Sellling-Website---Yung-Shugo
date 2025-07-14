import React from "react";
import { motion } from "framer-motion";

const Beats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 px-4 py-10"
    >
      {/* Header Text */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Listen & Buy Beats</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore and purchase high-quality beats for your next project.
        </p>
      </div>

      {/* BeatStars Player */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl overflow-hidden shadow-2xl bg-black border border-green-900/30"
      >
        <iframe
          src="https://player.beatstars.com/?storeId=150332"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "8px" }}
          allow="autoplay; clipboard-write"
        />
      </motion.div>

      <p className="text-center text-gray-300">
        All beats are licensed and delivered via BeatStars. Click "Add" to view
        options and download instantly.
      </p>
    </motion.div>
  );
};

export default Beats;
