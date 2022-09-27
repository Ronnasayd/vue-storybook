import { action } from '@storybook/addon-actions'
import VSlider from '../components/VSlider.vue'

export default {
  title: 'Documentation/VSlider',
  component: VSlider,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VSlider },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VSlider 
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
  't-label-class': '',
  't-description-class': '',
  't-slider-container-class': '',
  't-slider-content-class': '',
  't-error-class': '',
}
