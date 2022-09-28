/* eslint-disable import/order */
import { action } from '@storybook/addon-actions'
import VInput from '../components/VInput.vue'

export default {
  title: 'Documentation/VInput',
  component: VInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'password', 'email', 'hidden', 'tel'],
    },
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VInput },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VInput 
        v-model.lazy="model" 
        v-bind="{...args,...$props}" 
        @input="onInput"
        @change="onChange"
      >
        <template v-slot:right>
          <svg class="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.94 15.66A16.69 16.69 0 0 0 16 5 16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66 1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z" fill="#AFAFAF"/><path d="M16 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="#AFAFAF"/></svg>
        </template>
      </VInput>`,
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
  type: 'text',
  description: 'Description',
  disabled: false,
  readonly: false,
  rules: 'required',
  't-label-class': 'max-w-[400px]',
  't-description-class': '',
  't-input-wrapper-class': '',
  't-input-class': '',
  't-error-class': '',
  min: '',
  max: '',
  maxLength: '',
}
