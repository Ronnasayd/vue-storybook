<template>
  <div :class="[getAttr('t-card-class'), 'rounded-lg shadow-button']">
    <slot />
  </div>
</template>

<script>
import custom from '@/mixins/custom'
export default {
  mixins: [custom],
  methods: {},
}
</script>
