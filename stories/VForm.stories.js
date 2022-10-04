import { action } from '@storybook/addon-actions'
import VButton from '../components/VButton.vue'
import VForm from '../components/VForm.vue'
import VInput from '../components/VInput.vue'

export default {
  title: 'Components/VForm',
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
    <VForm @submit="onSubmit" v-bind="args" v-slot="{invalid}">
      <VInput v-model.lazy="model" id="teste" rules="required" description="Description"/>
      <VButton type="submit" variant="secondary" :disabled="invalid">submit</VButton>
    </VForm>`,
    methods: {
      onSubmit: action('submit'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  't-form-class': 'max-w-[400px]',
}
