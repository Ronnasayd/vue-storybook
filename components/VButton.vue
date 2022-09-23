<template>
  <button
    :data-variant="variant"
    :data-disabled="disabled"
    :class="[
      getAttr('class'),
      !!$props.variant && $props.variant.includes('outline')
        ? 'shadow-none border-[1.5px]'
        : 'shadow-button',
      'cdisabled:border-none cdisabled:bg-extra-4 cdisabled:text-extra-0 cdisabled:hover:bg-extra-4 cdisabled:cursor-default outline_secondary:hover:bg-[#1f4e5a0d]  outline_secondary:border-secondary-2 outline_secondary:bg-white outline_secondary:text-secondary-2  outline_primary:hover:bg-[#f05a220d]  outline_primary:border-primary-2 outline_primary:bg-white outline_primary:text-primary-2 primary:hover:bg-primary-1 primary:bg-primary-2 secondary:bg-secondary-2 secondary:hover:bg-secondary-1 l-inline-center-center gap-2 bg-primary-2 text-white py-3 px-8 cursor-pointer rounded-[8px] text-s2 sm:text-s3 w-full my-2 h-[46px]',
    ]"
    v-bind="{ ...$props }"
    @click="onClick"
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
      validator: (value) =>
        [
          'primary',
          'secondary',
          'outline_primary',
          'outline_secondary',
          '',
        ].includes(value),
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