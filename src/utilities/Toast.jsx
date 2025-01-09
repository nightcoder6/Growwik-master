import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Toast({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Allow time for exit animation
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg 
            text-white text-base font-semibold
            ${
              type === "success"
                ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                : "bg-gradient-to-r from-red-600 to-red-800"
            }`}
          style={{
            border: "1px solid #ffba08", // Subtle yellow-orange border
            boxShadow: "0 4px 15px rgba(255, 165, 0, 0.4)", // Orange shadow glow
          }}
        >
           {type === "success" ? "✅" : "❌"} {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
