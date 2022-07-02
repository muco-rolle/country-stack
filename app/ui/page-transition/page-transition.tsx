import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;

export function PageTransition(props: PageTransitionProps) {
  return (
    <motion.div
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...props}
    />
  );
}
