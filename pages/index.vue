<template>
  <VForm TFormClasses="p-4 max-w-[400px]" @submit="handleSubmit">
    <VInput
      id="teste"
      v-model="model"
      description="Description"
      rules="required"
      variant="secondary"
      placeholder="description"
      leftIcon=""
      :rightIcon="eyeSVG"
      TLabelClasses=""
      TDescriptionClasses=""
      TInputWrapperClasses=""
      TLeftIconClasses=""
      TInputClasses=""
      TRightIconClasses=""
      TErrorClasses=""
    />
    <VButton type="submit">enviar</VButton>
  </VForm>
</template>

<script>
import eyeSVG from '@/static/icons/eye.svg'
export default {
  name: 'IndexPage',
  data() {
    return { model: '', eyeSVG }
  },
  methods: {
    handleSubmit() {},
  },
}
</script>
