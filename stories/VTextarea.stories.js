/* eslint-disable import/order */
import { action } from '@storybook/addon-actions'
import VTextarea from '../components/VTextarea.vue'

export default {
  title: 'Components/VTextarea',
  component: VTextarea,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VTextarea },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VTextarea 
        v-model.lazy="model" 
        v-bind="{...args,...$props}" 
        @input="onInput"
        @change="onChange"
      >
      </VTextarea>`,
    methods: {
      onChange: action('change'),
      onInput: action('input'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  placeholder: 'placeholder',
  id: 'input-test',
  description: 'Description',
  disabled: false,
  readonly: false,
  rules: 'required',
  't-label-wrapper-class': 'max-w-[400px]',
  't-label-text-class': '',
  't-form-control-wrapper-class': '',
  't-form-control-class': '',
  't-error-message-class': '',
}
