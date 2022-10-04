import { action } from '@storybook/addon-actions'
import VButton from '../components/VButton.vue'

export default {
  title: 'Components/VButton',
  component: VButton,
  argTypes: {
    class: {
      description: 'button custom class',
      table: {
        category: 'Attributes',
        type: {
          summary: 'string',
          // detail: 'Something really really long',
        },
      },
    },
    text: {
      description: 'button text',
      table: {
        category: 'Attributes',
        type: {
          summary: 'string',
        },
      },
    },
    click: {
      description: 'When a button is clicked',
      table: {
        type: {
          summary: 'Function',
        },
      },
    },
    disabled: {
      description: 'When a button is disabled',
    },
    type: {
      description: 'valid types of buttons - [button|submit"]',
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    variant: {
      description: 'One of possible button variants',
      control: { type: 'select' },
      options: [
        'None',
        'primary',
        'secondary',
        'outline_secondary',
        'outline_primary',
      ],
    },
  },
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data() {
      return { args, text: args.text }
    },
    components: { VButton },
    template: `
    <VButton 
      @click="onClick" 
      v-bind="{...$props,...args}"  
    >{{text}}</VButton>`,
    methods: {
      onClick: action('click'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  /** Tipo de botão válido  */
  type: 'button',
  disabled: false,
  class: 'max-w-[300px]',
  text: 'Enviar',
}
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  ...Default.args,
  variant: 'primary',
}

export const Secondary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Secondary.args = {
  ...Default.args,
  variant: 'secondary',
}

export const OutlinePrimary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OutlinePrimary.args = {
  ...Default.args,
  variant: 'outline_primary',
}

export const OutlineSecondary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
OutlineSecondary.args = {
  ...Default.args,
  variant: 'outline_secondary',
}
