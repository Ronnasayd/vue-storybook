import { extend } from 'vee-validate'

export const required = {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    }
  },
  // message: "is {_field_} required",
  message: 'Este campo é obrigatório',
  computesRequired: true,
}

extend('required', required)

// Vue.component("ValidationProvider", ValidationProvider)
// Vue.component("ValidationObserver", ValidationObserver)
