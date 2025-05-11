import { ref } from 'vue'
import { useInputValidator } from './useInputValidator'

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

export interface BaseField {
  id: string
  name: string
  label: string
  value: any
  required?: boolean
  disabled?: boolean
  validators?: any[]
}

export interface InputField extends BaseField {
  fieldType: 'input'
  type: InputType
  validate: (value: any) => boolean
  errorMessage: any
}

export interface CheckboxField extends BaseField {
  fieldType: 'checkbox'
  type: 'checkbox'
  errorMessage: any
}

export type FormField = InputField | CheckboxField

export function useForm(fields: Omit<FormField, 'validate' | 'errorMessage'>[]) {
  const isSubmitted = ref(false)

  const formFields = ref(fields.map(field => {
    const { error, validate } = useInputValidator(field.validators || [])
    return {
      ...field,
      errorMessage: error,
      validate: (value: any) => {
        const isValid = validate(value)
        return isValid
      }
    } as FormField
  }))

  const validateForm = () => {
    isSubmitted.value = true
    let isValid = true

    formFields.value.forEach(field => {
      if (field.fieldType === 'input') {
        const fieldValid = field.validate(field.value)
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
