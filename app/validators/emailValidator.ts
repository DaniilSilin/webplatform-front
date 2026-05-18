const emailRegex = new RegExp('^.+@.+$')

const emailValidator = (value: string) => {
  if (!emailRegex.test(value)) {
    return "Введите существующий адрес эл. почты."
  } else {
    return ''
  }
}

export default emailValidator