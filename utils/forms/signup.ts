import { required, isEmail, minLength, requiredCheckbox } from '~/utils/validators/validators'
import type { FormField as FormFieldExternal } from '~/composables/useForm'

type FormField = Omit<FormFieldExternal, 'validate' | 'errorMessage'>

export const signupFormFields: FormField[] = [
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
