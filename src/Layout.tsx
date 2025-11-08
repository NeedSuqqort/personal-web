import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Background from "./components/Background";
import { useColor } from "./components/context/ColorModeContext";

export default function Layout() {
  const { mode } = useColor();
  return (
    <Box className={`layout ${mode}`}>
      <Header />
      <Box px={20} minHeight="100vh" position="relative">
        <Background />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
