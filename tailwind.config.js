const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js,html}",
    "./pages/**/*.{vue,js,html}",
    "./stories/**/*.{vue,js,html}", 
    "./.storybook/*.{js,html}",],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1440",
      },
      lineHeight: [
        "1.125rem",
        "1.25rem",
        "1.375rem",
        "1.5rem",
        "1.688rem",
        "1.875rem",
        "2rem",
        "2.563rem",
        "2.875rem",
        "3.375rem",
      ],
      fontSize: [
        "0.75rem",
        "0.875rem",
        "1rem",
        "1.125rem",
        "1.25rem",
        "1.375rem",
        "1.5rem",
        "1.875rem",
        "2.125rem",
        "2.5rem",
      ],
      colors: {
        primary: ["#FFBEA5", "#F07446", "#F05A22", "#C94C1D"],
        secondary: ["#2C515A", "#1F4E5A", "#122C33", "#0C2A31"],
        success: "#4CBB25",
        error: "#EC0C0C",
        info: "#3182CE",
        warn: "#F1C800",
        extra: [
          "#565656",
          "#F6F8FA",
          "#FEFEFE",
          "#1A1A1E",
          "#AFAFAF"
        ],
      },
      borderWidth: [...new Array(9)].map((el, index) => `${index}px`),
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant('error',['&[data-error="true"]','[data-error="true"] &']),
      addVariant('disable',['&[data-disable="true"]','[data-disable="true"] &'])
      addVariant('primary',['&[data-variant="primary"]','[data-variant="primary"] &'])
      addVariant('secondary',['&[data-variant="secondary"]','[data-variant="secondary"] &'])
    }),
    plugin(function ({ addUtilities, theme }) {
      const justifyContent = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        around: "space-around",
        between: "space-between",
        evenly: "space-evenly",
        stretch: "stretch",
      };
      const alignItems = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        stretch: "stretch",
        baseline: "baseline",
      };

      const headingUtilities = {};
      const inlineLayoutsUtilities = {};
      const stackLayoutsUtilities = {};


      for (let index = 0; index < 10; index++) {
        headingUtilities[`.heading-${index}`] = {
          fontSize: theme(`fontSize.${index}`),
          lineHeight: theme(`lineHeight.${index}`),
        };
      }

      for (const justify in justifyContent) {
        for (const items in alignItems) {
          inlineLayoutsUtilities[`.l-inline-${justify}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          stackLayoutsUtilities[`.l-stack-${justify}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-${items}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-${items}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
        }
      }
      const layoutUtilities = {
        ".l-center": {
          display: "grid",
          placeContent: "center",
        },

        ".l-inline": {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        },

        ".l-stack": {
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        },
      };
      addUtilities(headingUtilities, ["responsive"]);
      addUtilities(layoutUtilities, ["responsive"]);
      addUtilities(inlineLayoutsUtilities, ["responsive"]);
      addUtilities(stackLayoutsUtilities, ["responsive"]);
    }),
  ],
  // ...(process.env.STORYBOOK && { safelist: [{ pattern: /.*/ }] }),
// ...(process.env.STORYBOOK && { safelist: [
//   { pattern: /bg-.*/ },
//   { pattern: /text-.*/ },
//   { pattern: /w-.*/ },
//   { pattern: /h-.*/ }
// ] }),

  
};
