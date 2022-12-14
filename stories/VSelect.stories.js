/* eslint-disable import/order */
import { action } from '@storybook/addon-actions'
import VSelect from '../components/VSelect.vue'

export default {
  title: 'Components/VSelect',
  component: VSelect,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['None', 'primary', 'secondary'],
    },
  },
}

const Template = (args) => {
  return {
    components: { VSelect },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
      <VSelect 
        v-model.lazy="model" 
        v-bind="{...args,...$props}" 
        @input="onInput"
        :options="{ '1': 'option 1', '2': 'option 2' }"
      >
      </VSelect>`,
    methods: {
      onInput: action('input'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  placeholder: 'placeholder',
  id: 'select-test',
  description: 'Description',
  disabled: false,
  readonly: false,
  rules: 'required',
  't-label-wrapper-class': 'max-w-[400px]',
  't-label-text-class': '',
  't-select-wrapper-class': '',
  't-selected-class': '',
  't-arrow-class': '',
  't-error-message-class': '',
  't-options-class': 'max-w-[400px]',
  't-option-class': '',
}
