import { ref } from 'vue'
import type { ValidatorFn as ExternalValidatorFn } from '~/composables/useFormValidation'

export function useInputValidator(validators: ExternalValidatorFn[]) {
  const error = ref<string | null>(null)

  const validate = (value: string | boolean) => {
    for (const rule of validators) {
      const result = rule(value)
      if (result) {
        error.value = result
        return false
      }
    }
    error.value = null
    return true
  }

  return {
    error,
    validate
  }
}
