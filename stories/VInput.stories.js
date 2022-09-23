import { action } from '@storybook/addon-actions'
import VInput from '../components/VInput.vue'
import Icon from '../static/icons/eye.svg'

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
        @leftIconClick="onLeftIconClick"
        @rightIconClick="onRightIconClick"
      />`,
    methods: {
      onChange: action('change'),
      onInput: action('input'),
      onLeftIconClick: action('leftIconClick'),
      onRightIconClick: action('rightIconClick'),
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
  't-label-classes': 'max-w-[400px]',
  't-description-classes': '',
  't-input-wrapper-classes': '',
  't-left-icon-classes': '',
  't-right-icon-classes': '',
  't-input-classes': '',
  't-error-classes': '',
  'left-icon': Icon,
  'right-icon': '',
  min: '',
  max: '',
  maxLength: '',
}
