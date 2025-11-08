import { useInView } from "framer-motion";
import { useRef } from "react";
import { useColor } from "./components/context/ColorModeContext";

export default function Section({ children }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const { mode } = useColor();

  const animateStyling = {
    transform: inView ? "none" : "translateX(-200px)",
    opacity: inView ? 1 : 0,
    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
  };

  return (
    <div ref={ref} style={animateStyling} className={mode}>
      {children}
    </div>
  );
}
