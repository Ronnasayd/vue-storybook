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
      backgroundImage: {
        check: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
        radio: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
      },
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
        success: { light: '#88F199', dark: '#4CBB25' },
        error: { light: '#FF5454', dark: '#EC0C0C' },
        info: '#88CBF1',
        warn: '#F4D76A',
        extra: [
          '#FEFEFE',
          '#F6F8FA',
          '#E2E2E2',
          '#AFAFAF',
          '#939393',
          '#565656',
          '#1A1A1E',
          '#A83F18',
          '#EDF2FA',
        ],
      },
      borderWidth: [...new Array(9)].map((el, index) => `${index}px`),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
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
}
