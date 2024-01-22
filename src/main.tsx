import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const sw_file = process.env.NODE_ENV === "development" ? "./src/" : "./";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(`${sw_file}sw.js`)
      .then((registration) => {
        console.log("Registered: ", registration);
      })
      .catch((error) => {
        console.log("Registered failed: ", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
