import { action } from "@storybook/addon-actions";
import VInput from "../components/VInput.vue";

export default {
  title: "Documentation/VInput",
  component: VInput,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "email"],
    },
    variant: {
      control: { type: "select" },
      options: ["None","primary"],
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    data() {
      return {
        model: "",
      };
    },
    components: { VInput },
    template:
      '<VInput @change="onChange" @input="onInput" v-model="model" v-bind="$props" />',
    methods: {
      onChange: action("change"),
      onInput: action("input"),
    },
  };
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  placeholder: "placeholder",
  id: "input-test",
  type: "text",
  description: "Description",
  disabled: false,
  "TLabelClasses": "",
  "TDescriptionClasses": "",
  "TInputClasses": "",
  "TErrorClasses": "",
  rules: "required",
};
