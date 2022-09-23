import { action } from '@storybook/addon-actions'
import VButton from '../components/VButton.vue'

export default {
  title: 'Documentation/VButton',
  component: VButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    variant: {
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
    components: { VButton },
    template: '<VButton @click="onClick" v-bind="$props" >Enviar</VButton>',
    methods: {
      onClick: action('click'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  type: 'button',
  disabled: false,
  class: 'max-w-[300px]',
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
