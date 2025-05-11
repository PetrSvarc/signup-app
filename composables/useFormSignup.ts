import { ref } from 'vue'
import { useInputValidator } from './useInputValidator'
import { required, isEmail, minLength } from '../utils/validators/validators'

export function useFormSignup() {
  const email = ref('')
  const password = ref('')
  const wantsUpdates = ref(false)

  const { error: emailError, validate: validateEmail } = useInputValidator([
    required(),
    isEmail()
  ])

  const { error: passwordError, validate: validatePassword } = useInputValidator([
    required(),
    minLength(6)
  ])

  const validateForm = () => {
    const emailValid = validateEmail(email.value)
    const passwordValid = validatePassword(password.value)
    return emailValid && passwordValid
  }

  const submit = async () => {
    if (!validateForm()) return false

    // Simulate a "fake" API call
    await new Promise(resolve => setTimeout(resolve, 800))

    return true
  }

  return {
    email,
    password,
    wantsUpdates,
    emailError,
    passwordError,
    validateForm,
    submit
  }
}
