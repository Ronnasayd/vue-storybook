<template>
  <VForm t-form-classes="p-4 max-w-[320px]">
    <VInput
      id="teste"
      v-model="model"
      description="Description"
      rules="required"
      variant="primary"
    />
  </VForm>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return { model: '' }
  },
}
</script>
