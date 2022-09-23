import { action } from '@storybook/addon-actions'
import VButton from '../components/VButton.vue'
import VForm from '../components/VForm.vue'
import VInput from '../components/VInput.vue'

export default {
  title: 'Documentation/VForm',
  component: VForm,
}

const Template = (args) => {
  return {
    components: { VForm, VInput, VButton },
    data() {
      return { args, model: '' }
    },
    // props: Object.keys(args),
    template: `
    <VForm @submit="onSubmit" v-bind="args">
      <VInput v-model="model" id="teste" rules="required" description="Description"/>
      <VButton type="submit">submit</VButton>
    </VForm>`,
    methods: {
      onSubmit: action('submit'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  't-form-classes': 'max-w-[400px]',
}
