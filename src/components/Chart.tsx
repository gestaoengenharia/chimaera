import { Box, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chart(props: { options: any }) {
  props.options.chart.width = 380;

  return (
    <Box
      sx={{
        backgroundColor: "brand.darkgray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDir: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 3,
          width: "100%",
        }}
      >
        <Text
          sx={{
            fontSize: "md",
            fontWeight: "500",
          }}
        >
          {props.options.title.text}
        </Text>
        <Text
          sx={{
            fontSize: "xs",
          }}
        >
          {props.options.subtitle.text}
        </Text>
      </Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={{ ...props.options, title: undefined, subtitle: undefined }}
      />
    </Box>
  );
}
