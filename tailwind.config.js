const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js,html}',
    './pages/**/*.{vue,js,html}',
    './stories/**/*.{vue,js,html}',
    './.storybook/*.{js,html}',
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440',
      },

      fontSize: {
        s1: [`${12 / 16}rem`, `${16 / 16}rem`], // 12px 16px
        s2: [`${14 / 16}rem`, `${19.1 / 16}rem`], // 14px 19.1px
        s3: [`${16 / 16}rem`, `${20 / 16}rem`], // 16px 20px
        s4: [`${18 / 16}rem`, `${24 / 16}rem`], // 18px 24px
        s5: [`${20 / 16}rem`, `${28 / 16}rem`], // 20px 28px
        s6: [`${24 / 16}rem`, `${32 / 16}rem`], // 24px 32px
        s7: [`${28 / 16}rem`, `${40 / 16}rem`], // 28px 40px
        s8: [`${32 / 16}rem`, `${48 / 16}rem`], // 32px 48px
        s9: [`${40 / 16}rem`, `${54 / 16}rem`], // 40px 54px
      },

      colors: {
        primary: ['#FFBEA5', '#F07446', '#F05A22', '#C94C1D'],
        secondary: ['#2C515A', '#1F4E5A', '#122C33', '#0C2A31'],
        success: '#4CBB25',
        error: '#EC0C0C',
        info: '#3182CE',
        warn: '#F1C800',
        extra: ['#565656', '#F6F8FA', '#FEFEFE', '#1A1A1E', '#AFAFAF'],
      },
      borderWidth: [...new Array(9)].map((el, index) => `${index}px`),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      const variants = [
        'primary',
        'secondary',
        'outline_primary',
        'outline_secondary',
      ]
      variants.forEach((variant) => {
        addVariant(variant, [
          `&[data-variant=${variant}]`,
          `[data-variant=${variant}] &`,
          `[data-variant=${variant}]&`,
        ])
      })
      addVariant('c-focus', [
        '&[data-focus=true]',
        '[data-focus=true] &',
        '[data-focus=true]&',
      ])
      addVariant('error', [
        `&[data-error=true]`,
        '[data-error=true] &',
        '[data-error=true]&',
      ])
      addVariant('c-disabled', [
        '&[data-disabled=true]',
        '[data-disabled=true] &',
        '[data-disabled=true]&',
      ])
    }),
    plugin(function ({ addUtilities, theme }) {
      const justifyContent = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        around: 'space-around',
        between: 'space-between',
        evenly: 'space-evenly',
        stretch: 'stretch',
      }
      const alignItems = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
        baseline: 'baseline',
      }

      const inlineLayoutsUtilities = {}
      const stackLayoutsUtilities = {}

      for (const justify in justifyContent) {
        for (const items in alignItems) {
          inlineLayoutsUtilities[`.l-inline-${justify}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          stackLayoutsUtilities[`.l-stack-${justify}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-${items}`] = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
          stackLayoutsUtilities[`.l-stack-${justify}-${items}-nowrap`] = {
            display: 'flex',
            flexWrap: 'nowrap',
            flexDirection: 'column',
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          }
        }
      }
      const layoutUtilities = {
        '.l-center': {
          display: 'grid',
          placeContent: 'center',
        },

        '.l-inline': {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },

        '.l-stack': {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },
      }
      addUtilities(layoutUtilities, ['responsive'])
      addUtilities(inlineLayoutsUtilities, ['responsive'])
      addUtilities(stackLayoutsUtilities, ['responsive'])
    }),
  ],
  // ...(process.env.STORYBOOK && { safelist: [{ pattern: /.*/ }] }),
  // ...(process.env.STORYBOOK && { safelist: [
  //   { pattern: /bg-.*/ },
  //   { pattern: /text-.*/ },
  //   { pattern: /w-.*/ },
  //   { pattern: /h-.*/ }
  // ] }),
}
