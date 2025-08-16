import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Background from "./components/Background";

export default function Layout() {
  return (
    <Box className="layout">
      <Header />
      <Box px={20} minHeight="100vh" position="relative">
        <Background />
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
