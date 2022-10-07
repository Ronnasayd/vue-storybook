/* eslint-disable import/order */
import { action } from '@storybook/addon-actions'
import VDropdown from '../components/VDropdown.vue'

export default {
  title: 'Components/VDropdown',
  component: VDropdown,
  argTypes: {},
}

const Template = (args) => {
  return {
    components: { VDropdown },
    data() {
      return { model: '', args }
    },
    props: Object.keys(args),
    template: `
    <VDropdown>
      <template #toggle> Click me !</template>
      <template #items>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="onClick">
          item 1
        </li>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="onClick">
          item 2
        </li>
        <li class="cursor-pointer p-2 hover:bg-extra-1" @click="onClick">
          item 3
        </li>
      </template>
    </VDropdown>`,
    methods: {
      onClick: action('click'),
    },
  }
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  't-dropdown-items-wrapper-class': 'max-w-[200px]',
  't-dropdown-wrapper-class': 'm-4',
  't-dropdown-toggle-wrapper-class': '',
}
