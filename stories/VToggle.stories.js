import { action } from '@storybook/addon-actions'
import VToggle from '../components/VToggle.vue'

export default {
  title: 'Components/VToggle',
  component: VToggle,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VToggle },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VToggle 
        v-model="model" 
        v-bind="{...args,...$props}" 
        @input="onInput"
        @change="onChange"
      />`,
    methods: {
      onChange: action('change'),
      onInput: action('input'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  id: 'input-slider',
  description: 'Description',
  disabled: false,
  rules: '',
  't-label-wrapper-class': '',
  't-label-text-class': '',
  't-toggle-wrapper-class': '',
  't-toggle-content-class': '',
  't-error-message-class': '',
}
