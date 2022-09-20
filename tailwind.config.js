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
