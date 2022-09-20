const path  = require("path")
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          
          implementation: require("postcss"),
          postcssOptions: {
            plugins: {
              tailwindcss: {}, // or you can nest your options entirely here
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    }
  ],
  "framework": "@storybook/vue",
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           postcssOptions: {
  //             plugins: [
  //               require('tailwindcss'),
  //               require('autoprefixer'),
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   })
  //   return config
  // },
}