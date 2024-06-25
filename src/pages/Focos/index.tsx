import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "../../components/Dashboard";
import Map from "../../components/Map";
import Layout from "../Layout";

export default function App() {
  return (
    <Layout>
      <Box textAlign="center" fontSize="xl">
        <Flex
          minH="100vh"
          flexDir={"row"}
          minW={"100vw"}
          justifyContent={"space-between"}
          zIndex={1}
          maxH={"100vh"}
        >
          <Box flex={1}>
            <Map />
          </Box>
          <Box
            borderRadius={"5px 0 0 5px"}
            boxShadow={"-12px 0px 5px -3px rgba(0,0,0,0.25);"}
            maxW={"400px"}
            flex={1}
            zIndex={2}
          >
            <Dashboard />
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
