import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "../theme";
import "./../index.css";
import Casos from "./Casos";
import Focos from "./Focos";
import Home from "./Home";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/focos" element={<Focos />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
