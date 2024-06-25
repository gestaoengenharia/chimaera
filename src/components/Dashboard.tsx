import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { theme } from "../theme";
import Chart from "./Chart";

export default function Dashboard() {
  const today = new Date();
  function generateRandomData() {
    const data = [];
    const startDate = Date.UTC(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
    const oneDay = 24 * 3600 * 1000;
    let value = 0;

    for (let i = 0; i < 365; i++) {
      value += Math.round(Math.random() * 1);
      data.push([startDate + i * oneDay, value]);
    }

    return data;
  }

  const data = generateRandomData();

  // Calculate the yearly statistics
  let total = 0;
  let monthlyCases = new Array(12).fill(0);

  data.forEach((point) => {
    const date = new Date(point[0]);
    const month = date.getUTCMonth();
    total += point[1];
    monthlyCases[month] += point[1];
  });

  const maxCases = Math.max(...monthlyCases);
  const monthIndex = monthlyCases.indexOf(maxCases);

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const averageCases = total / data.length;

  // Generate dummy data for bairros based on yearly data
  const bairrosData = [
    { name: "Bairro A", value: Math.round(total * 0.15) },
    { name: "Bairro B", value: Math.round(total * 0.08) },
    { name: "Bairro C", value: Math.round(total * 0.06) },
    { name: "Bairro D", value: Math.round(total * 0.05) },
    { name: "Bairro E", value: Math.round(total * 0.04) },
    { name: "Bairro F", value: Math.round(total * 0.02) },
    { name: "Bairro G", value: Math.round(total * 0.01) },
    { name: "Bairro H", value: Math.round(total * 0.59) },
  ];

  const lineChartOptions = {
    chart: {
      type: "line",
      backgroundColor: theme.colors.brand.darkgray,
      height: 220,
    },
    title: {
      text: "Focos acumulados",
      style: {
        color: "#FFFFFF",
      },
    },
    subtitle: {
      text: `entre ${monthNames[today.getMonth()]}/${
        today.getFullYear() - 2000
      } e ${monthNames[today.getMonth()]}/${today.getFullYear() - 2000}`,
      style: {
        color: "#FFFFFF",
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
    },
    yAxis: {
      title: {
        text: "",
        style: {
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          color: "#FFFFFF",
        },
      },
    },
    legend: {
      itemStyle: {
        color: "#FFFFFF",
      },
    },
    tooltip: {
      shared: true,
      backgroundColor: "#FFFFFF",
      style: {
        color: "#000000",
      },
    },
    series: [
      {
        name: "Focos acumulados",
        data: data,
        color: theme.colors.brand.lightgreen,
      },
    ],
  };

  const pieChartOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#1f1f1f",
      height: 250,
    },
    title: {
      text: "Focos identificados",
      style: {
        color: "#FFFFFF",
      },
    },
    subtitle: {
      text: "por bairro",
      style: {
        color: "#FFFFFF",
      },
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: true,
          style: {
            color: "#FFFFFF",
          },
        },
      },
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      style: {
        color: "#000000",
      },
    },
    series: [
      {
        name: "Focos",
        data: bairrosData.map((b, i) => ({
          name: b.name,
          y: b.value,
          color: theme.colors.brand["green" + (i + 1) * 100],
        })),
        showInLegend: false,
        dataLabels: {
          format: "{point.y}",
        },
      },
    ],
  };

  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        maxHeight: "100%",
        backgroundColor: "brand.darkgray",
        overflowY: "auto",
      }}
    >
      <Stack
        sx={{
          padding: 3,
          textAlign: "left",
          lineHeight: "1.2",
          display: "flex",
          flexDirection: "column",
          gap: 2.5,
        }}
      >
        <Text
          sx={{
            color: "brand.lightgreen",
            fontSize: "5xl",
            fontWeight: "600",
            lineHeight: "1",
          }}
        >
          {total} focos identificados
        </Text>
        <Text
          sx={{
            fontSize: "xs",
            fontWeight: "100",
          }}
        >
          entre {monthNames[today.getMonth()]}/{today.getFullYear() - 2000} e{" "}
          {monthNames[today.getMonth()]}/{today.getFullYear() - 2000}
        </Text>
        <Text
          sx={{
            fontSize: "xl",
            fontWeight: "500",
          }}
        >
          Em média {averageCases.toFixed(2)} focos identificados por dia
        </Text>
        <Text
          sx={{
            color: "brand.green500",
            fontSize: "xl",
            fontWeight: "500",
          }}
        >
          36,9% de aumento em relação ao mesmo período do ano anterior
        </Text>
        <Text
          sx={{
            fontSize: "xl",
            fontWeight: "500",
          }}
        >
          O mês com maior número de focos foi {monthNames[monthIndex]}, com{" "}
          {maxCases} focos identificados
        </Text>
      </Stack>
      <Box
        sx={{
          overflowY: "auto",
          height: `100%`,
        }}
      >
        <Chart options={lineChartOptions} />
        <Chart options={pieChartOptions} />
      </Box>
    </Flex>
  );
}
