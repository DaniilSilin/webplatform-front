const confirmEmailValidator = (email: string, confirmEmail: string) => {
  if (confirmEmail.length === 0) {
    return "Пожалуйста, подтвердите адрес эл. почты в соответствующем поле."
  } else if (email !== confirmEmail && email.length > 0 && confirmEmail.length > 0) {
    return "Адрес эл. почты в обоих полях должен совпадать."
  } else {
    return ""
  }
}

export default confirmEmailValidator
