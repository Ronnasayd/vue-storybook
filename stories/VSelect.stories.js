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
        @change="onChange"
        :options="[
          { key: '1', value: 'option 1' },
          { key: '2', value: 'option 2' },
        ]"
      >
      </VSelect>`,
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
  id: 'select-test',
  description: 'Description',
  disabled: false,
  readonly: false,
  rules: 'required',
  't-label-class': 'max-w-[400px]',
  't-description-class': '',
  't-select-wrapper-class': '',
  't-selected-class': '',
  't-arrow-class': '',
  't-error-class': '',
  't-options-class': 'max-w-[400px]',
  't-option-class': '',
}
