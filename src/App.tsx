import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router";
import { AuthProvider } from "./Hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StylesGlobal } from "./styles/Global";

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <StylesGlobal>
          <ToastContainer />
          <Router />
        </StylesGlobal>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
