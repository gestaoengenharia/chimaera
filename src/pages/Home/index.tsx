import { Box, Button, Image, Text } from "@chakra-ui/react";
import Layout from "../Layout";
import bgOrto from "./../../assets/bg-orto.jpg";
import droneSVG from "./../../assets/drone.svg";

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        {/* Página 1 */}
        <Box
          sx={{
            padding: 6,
            display: "flex",
            flexDir: "column",
            width: "70%",
            "@media (max-width: 768px)": {
              width: "80%",
            },
            height: "100%",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Text
            sx={{
              fontSize: "6xl",
              fontWeight: "400",
              zIndex: 10,
              "@media (max-width: 768px)": {
                fontSize: "4xl",
                fontWeight: "400",
              },
            }}
          >
            Monitore arboviroses em Ponte Nova
          </Text>
          <Text
            sx={{
              fontSize: "xl",
              zIndex: 10,
              "@media (max-width: 768px)": {
                fontSize: "md",
                fontWeight: "400",
              },
            }}
          >
            Acompanhe a dinâmica de casos e focos de dengue, chikungunya e Zika
            com estatísticas, gráficos e informações geoespaciais
          </Text>

          <Image
            src={droneSVG}
            sx={{
              position: "fixed",
              left: "80%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          />
          <Box
            sx={{
              position: "fixed",
              minHeight: "100%",
              minWidth: "100%",

              right: "0",
              zIndex: 1,
              display: "flex",
              flexDir: "row",
              justifyContent: "flex-end",
              paddingRight: "20%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                backgroundColor: "brand.darkgray",
                width: "100vw",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                transform: "skew(-10deg)",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "fixed",
              minHeight: "100%",
              minWidth: "100%",
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bgOrto})`,
              backgroundSize: "cover",
              zIndex: 0,
            }}
          ></Box>
          <Box
            sx={{
              zIndex: 10,
            }}
          >
            <Button
              variant={"outline"}
              sx={{
                color: "white",
                marginTop: 2,
              }}
            >
              Acesso cidadão
            </Button>
            <br />
            <Button
              variant={"outline"}
              sx={{
                color: "white",
                marginTop: 2,
              }}
            >
              Acesso SEMSA
            </Button>
          </Box>
        </Box>
        {/* Página 2 */}
      </Box>
    </Layout>
  );
}
