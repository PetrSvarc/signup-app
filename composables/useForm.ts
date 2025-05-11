import { ref, type Ref } from 'vue'
import { useInputValidator } from './useInputValidator'
import type { ValidatorFn, ValidationResult } from '../utils/validators/validators'

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

export interface BaseField {
  id: string
  name: string
  label: string
  value: string | boolean
  required?: boolean
  disabled?: boolean
  validators?: ValidatorFn[]
}

export interface InputField extends BaseField {
  fieldType: 'input'
  type: InputType
  validate: (value: string) => boolean
  errorMessage: Ref<ValidationResult>
}

export interface CheckboxField extends BaseField {
  value: boolean
  fieldType: 'checkbox'
  type: 'checkbox'
  errorMessage: Ref<ValidationResult>
}

export type FormField = InputField | CheckboxField

export function useForm(fields: Omit<FormField, 'validate' | 'errorMessage'>[]) {
  const isSubmitted = ref(false)

  const formFields = ref(fields.map(field => {
    const { error, validate } = useInputValidator(field.validators || [])
    return {
      ...field,
      errorMessage: error,
      validate: (value: string | boolean) => {
        return validate(value as string)
      }
    } as FormField
  }))

  const validateForm = () => {
    isSubmitted.value = true
    let isValid = true

    formFields.value.forEach(field => {
      if (field.fieldType === 'input') {
        const fieldValid = field.validate(field.value as string)
        if (!fieldValid) {
          isValid = false
        }
      }
    })

    return isValid
  }

  const submit = async () => {
    if (!validateForm()) return false

    // Simulate a "fake" API call
    await new Promise(resolve => setTimeout(resolve, 800))

    return true
  }

  const getFieldValue = (name: string) => {
    return formFields.value.find(field => field.name === name)?.value
  }

  const setFieldValue = (name: string, value: any) => {
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
    setFieldValue
  }
}
