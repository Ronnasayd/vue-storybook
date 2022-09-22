<template>
  <button
    :data-variant="variant"
    :data-disabled="disabled"
    :class="[
      getAttr('TButtonClasses'),
      'secondary:bg-secondary-2 l-inline-center-center gap-2 bg-primary-2 text-white py-2 px-4 cursor-pointer rounded text-heading-2 md:text-heading-3 w-full my-2 ',
    ]"
    @click="onClick"
    v-bind="{ ...$props }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator: (value) => ['button', 'submit'].includes(value),
      default: 'button',
    },
    variant: {
      type: String,
      default: '',
      validator: (value) => ['primary', 'secondary', ''].includes(value),
    },
    disabled: { type: Boolean, default: false },
  },
  methods: {
    getAttr(attr) {
      return this.$attrs?.[attr] ?? ''
    },
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style>
</style>