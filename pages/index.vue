<template>
  <VForm t-form-classes="p-4">
    <VInput
      id="teste"
      v-model="model"
      description="description"
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
