import { useFormValidation } from './useFormValidation'
import type { FormField as FormFieldExternal } from './useForm'

type FormField = Omit<FormFieldExternal, 'validate' | 'errorMessage'>

export const useSignupForm = () => {
  const { required, isEmail, minLength } = useFormValidation()

  const signupFormFields: FormField[] = [
    {
      id: 'email',
      name: 'email',
      fieldType: 'input',
      type: 'email',
      label: 'Email',
      value: '',
      validators: [required(), isEmail()],
      required: true
    },
    {
      id: 'password',
      name: 'password',
      fieldType: 'input',
      type: 'password',
      label: 'Password',
      value: '',
      validators: [required(), minLength(6)],
      required: true
    },
    {
      id: 'wantsUpdates',
      name: 'wantsUpdates',
      fieldType: 'checkbox',
      type: 'checkbox',
      label: 'I want to receive updates',
      value: false,
    }
  ]

  return {
    signupFormFields
  }
} 