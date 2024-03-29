import Header from "./Header";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box className="layout">
      <Header />
      <Box px={20} minHeight="100vh">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
