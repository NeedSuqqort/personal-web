import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animateStyling = {
    transform: inView ? "none" : "translateY(30px)",
    opacity: inView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <div ref={ref} style={animateStyling}>
      {children}
    </div>
  );
}
