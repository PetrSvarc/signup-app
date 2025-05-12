import { ref, type Ref } from 'vue'
import { useInputValidator } from './useInputValidator'
import type { ValidatorFn, ValidationResult } from '~/composables/useFormValidation'

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

export interface BaseField<T = string | boolean> {
  id: string
  name: string
  label: string
  value: T
  required?: boolean
  disabled?: boolean
  validators?: ValidatorFn[]
}

export interface InputField extends BaseField<string> {
  fieldType: 'input'
  type: InputType
  validate: (value: string | boolean) => boolean
  errorMessage: Ref<ValidationResult>
}

export interface CheckboxField extends BaseField<boolean> {
  fieldType: 'checkbox'
  type: 'checkbox'
  validate: (value: string | boolean) => boolean
  errorMessage: Ref<ValidationResult>
}

export type FormField = InputField | CheckboxField

export function useForm(fields: Omit<FormField, 'validate' | 'errorMessage'>[]) {
  const isSubmitted = ref(false)
  const isSubmitting = ref(false)

  const formFields = ref(fields.map(field => {
    const { error, validate } = useInputValidator(field.validators || [])
    return {
      ...field,
      errorMessage: error,
      validate
    } as FormField
  }))

  const validateForm = () => {
    isSubmitted.value = true
    let isValid = true

    formFields.value.forEach(field => {
      const fieldValid = field.validate(field.value)
      if (!fieldValid) {
        isValid = false
      }
    })

    return isValid
  }

  const submit = async () => {
    if (!validateForm()) return false

    isSubmitting.value = true
    try {
      // Simulate a "fake" API call
      await new Promise(resolve => setTimeout(resolve, 800))
      return true
    } finally {
      isSubmitting.value = false
    }
  }

  const getFieldValue = (name: string) => {
    return formFields.value.find(field => field.name === name)?.value
  }

  const setFieldValue = (name: string, value: string | boolean) => {
    const field = formFields.value.find(field => field.name === name)
    if (field) {
      field.value = value
    }
  }

  return {
    formFields,
    validateForm,
    submit,
    getFieldValue,
    setFieldValue,
    isSubmitting
  }
}
