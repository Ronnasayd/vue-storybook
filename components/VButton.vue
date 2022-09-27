<template>
  <button
    :data-variant="variant"
    :data-disabled="disabled"
    :class="[
      getAttr('class'),
      !!$props.variant && $props.variant.includes('outline')
        ? 'border-[1.5px] shadow-none'
        : 'text-white shadow-button',
      'my-2 h-[46px] w-full cursor-pointer gap-2 rounded-lg py-3 px-8 text-s2 font-[700]  text-secondary-2 l-inline-center-center primary:bg-primary-2 primary:text-white primary:hover:bg-primary-1 primary:active:bg-primary-3 secondary:bg-secondary-2 secondary:text-white secondary:hover:bg-secondary-1  secondary:active:bg-secondary-3 outline_primary:border-primary-2 outline_primary:bg-white outline_primary:text-primary-2 outline_primary:hover:bg-[#f05a220d] outline_primary:active:bg-[#f0592248]  outline_secondary:border-secondary-2 outline_secondary:bg-white outline_secondary:text-secondary-2 outline_secondary:hover:bg-[#1f4e5a0d] outline_secondary:active:bg-[#1f4e5a4b] c-disabled:cursor-default c-disabled:border-none c-disabled:bg-extra-2 c-disabled:text-extra-3 c-disabled:hover:bg-extra-2 sm:text-s3',
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

<style></style>
