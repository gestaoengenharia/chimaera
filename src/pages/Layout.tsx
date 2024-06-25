import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function Layout(props: { children: ReactNode }) {
  return (
    <Box
      sx={{
        backgroundColor: "brand.darkgray",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      {props.children}
    </Box>
  );
}
