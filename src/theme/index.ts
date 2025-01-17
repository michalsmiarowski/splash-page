import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Button } from "./Button"
import { Card } from "./Card"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "70em",
  xl: "80em",
  "2xl": "96em",
})

const colors = {
  brand: {
    50: "#FCF9FF",
    100: "#D5C6FF",
    // 200
    300: "#9974FF",
    // 400
    500: "#7D00FF", // main Threshold brand color
    550: "#7C47EE", // main Threshold brand color - DARK MODE
    // 600
    700: "#4E2E99",
    800: "#3B257A",
    900: "#1C0758",
  },
}

const index = extendTheme({
  breakpoints,
  colors,
  components: {
    Button,
    Card,
  },
})

export default index
