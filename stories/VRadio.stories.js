import { action } from '@storybook/addon-actions'
import VRadio from '../components/VRadio.vue'

export default {
  title: 'Components/VRadio',
  component: VRadio,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VRadio },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VRadio 
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
  id: 'input-radio',
  description: 'Description',
  name: 'radio',
  disabled: false,
  rules: '',
  't-label-class': '',
  't-description-class': '',
  't-input-class': '',
  't-error-class': '',
}
