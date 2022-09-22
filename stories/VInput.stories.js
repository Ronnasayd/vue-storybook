import { action } from "@storybook/addon-actions";
import VInput from "../components/VInput.vue";

export default {
  title: "Documentation/VInput",
  component: VInput,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "email","hidden","tel"],
    },
    variant: {
      control: { type: "select" },
      options: ["None","primary","secondary"],
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
      '<VInput @change="onChange" @input="onInput" @leftIconClick="onLeftIconClick" @rightIconClick="onRightIconClick" v-model="model" v-bind="$props" />',
    methods: {
      onChange: action("change"),
      onInput: action("input"),
      onLeftIconClick: action('leftIconClick'),
      onRightIconClick: action('rightIconClick')
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
  TLabelClasses: "",
  TDescriptionClasses: "",
  TInputWrapperClasses:"",
  TLeftIconClasse:"",
  TRightIconClasses:"",
  TInputClasses: "",
  TErrorClasses: "",
  rules: "required",
  leftIcon:"",
  rightIcon:"",
  min:"",
  max:"",
  maxLength:"",
  readonly:false,
};
