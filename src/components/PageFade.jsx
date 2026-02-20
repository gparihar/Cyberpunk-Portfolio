import { motion } from "framer-motion";

function PageFade() {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black origin-left z-50"
    />
  );
}

export default PageFade;