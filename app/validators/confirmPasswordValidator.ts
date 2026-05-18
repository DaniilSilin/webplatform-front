const confirmPasswordValidator = (password: string, confirmPassword: string) => {
  if (password !== confirmPassword && password.length > 0 && confirmPassword.length > 0) {
    return 'Пароли не совпадают'
  } else {
    return ''
  }
}

export default confirmPasswordValidator