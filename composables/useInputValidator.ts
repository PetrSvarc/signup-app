import { ref } from 'vue'

type ValidatorFn = (value: string) => string | null

export function useInputValidator(validators: ValidatorFn[]) {
  const error = ref<string | null>(null)

  const validate = (value: string) => {
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