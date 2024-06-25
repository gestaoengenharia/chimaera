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
