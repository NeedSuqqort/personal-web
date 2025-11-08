import { useEffect, useRef } from "react";
import { useColor } from "./context/ColorModeContext";
import BIRDS from "vanta/dist/vanta.birds.min";

export default function Background() {
  const vantaRef = useRef(null);
  const effectRef = useRef<any>(null);
  const { mode } = useColor();

  useEffect(() => {
    if (vantaRef.current && !effectRef.current) {
      effectRef.current = BIRDS({
        el: vantaRef.current,
        backgroundColor: mode === "light" ? 0xffffff : 0x123456,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        birdSize: 0.5,
        scaleMobile: 1.0,
        time: 1.0,
        THREE: (window as any).THREE,
      });
    }
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [mode]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
