import { createMultiStyleConfigHelpers, extendTheme } from "@chakra-ui/react";

import { tabsAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseTabStyle = definePartsStyle({
  tab: {
    _selected: {
      color: "brand.lightgreen",
      borderColor: "brand.lightgreen",
    },
  },
  tablist: {
    borderBottom: "none",
  },
  tabpanel: {},
});

const tabsTheme = defineMultiStyleConfig({ baseStyle: baseTabStyle });

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      lightgreen: `#4AB96A`,
      darkgreen: `#193622`,
      darkgray: `#202020`,
      green100: `#E6F4E0`,
      green200: `#CCE9C1`,
      green300: `#B3DEA2`,
      green400: `#99D381`,
      green500: `#6AA075`,
      green600: `#4E7856`,
      green700: `#324D38`,
      green800: `#19231A`,
      green900: `#193622`,
    },
  },
  styles: {
    global: {
      body: {
        bg: "#202020",
        color: "white",
      },
    },
  },
  components: {
    Tabs: tabsTheme,
  },
});
