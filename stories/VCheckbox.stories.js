import { action } from '@storybook/addon-actions'
import VCheckbox from '../components/VCheckbox.vue'

export default {
  title: 'Components/VCheckbox',
  component: VCheckbox,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VCheckbox },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VCheckbox 
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
  id: 'input-checkbox',
  description: 'Description',
  disabled: false,
  rules: '',
  't-label-class': '',
  't-description-class': '',
  't-input-class': '',
  't-error-class': '',
}
