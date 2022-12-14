const path = require('path')

module.exports = {
  staticDirs: ['../static'],
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8

          implementation: require('postcss'),
          postcssOptions: {
            plugins: [
              require('tailwindcss/nesting'),
              require('tailwindcss')(
                path.join(__dirname, '..', 'tailwind.config.js')
              ),
              require('autoprefixer'),
            ],
          },
        },
      },
    },
  ],
  framework: '@storybook/vue',

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.postcss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss/nesting'),
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '..'),
    }
    return config
  },
}
