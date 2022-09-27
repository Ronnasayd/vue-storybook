// import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import '../assets/css/tailwind.css'
import '../plugins/veeValidate.js'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
