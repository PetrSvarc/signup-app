import { useFormValidation } from './useFormValidation'
import type { FormField as FormFieldExternal } from './useForm'
import { FieldType } from './useForm'

type FormField = Omit<FormFieldExternal, 'validate' | 'errorMessage'>

export const useSignupForm = () => {
  const { required, isEmail, minLength } = useFormValidation()

  const signupFormFields: FormField[] = [
    {
      id: 'email',
      expand: true,
      name: 'email',
      fieldType: FieldType.INPUT,
      type: 'email',
      label: 'Email',
      value: '',
      validators: [required(), isEmail()],
      required: true
    },
    {
      id: 'password',
      expand: true,
      name: 'password',
      fieldType: FieldType.INPUT,
      type: 'password',
      label: 'Password',
      value: '',
      validators: [required(), minLength(6)],
      required: true
    },
    {
      id: 'wantsUpdates',
      name: 'wantsUpdates',
      fieldType: FieldType.CHECKBOX,
      type: 'checkbox',
      label: 'I want to receive updates',
      value: false,
    }
  ]

  return {
    signupFormFields
  }
} 