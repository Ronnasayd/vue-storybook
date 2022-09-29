<template>
  <div
    v-show="mustShow"
    ref="modalRef"
    :class="[
      getAttr('t-modal-class'),
      'absolute top-0 left-0 right-0 bottom-0 z-10 h-screen w-screen bg-[#0000007e] l-inline-center-center',
    ]"
    @click="handleClick"
  >
    <slot class="z-20"></slot>
  </div>
</template>

<script>
import custom from '@/mixins/custom'
export default {
  mixins: [custom],
  props: {
    mustShow: { type: Boolean, default: false },
  },
  methods: {
    handleClick(event) {
      if (this.$refs.modalRef === event.target) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style></style>
