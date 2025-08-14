import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

// for testing PWA functionality in development

// const sw_file = import.meta.env.MODE === "development" ? "./src/" : "./";
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register(`${sw_file}sw.js`)
//       .then((registration) => {
//         console.log("Registered: ", registration);
//       })
//       .catch((error) => {
//         console.log("Registered failed: ", error);
//       });
//   });
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
