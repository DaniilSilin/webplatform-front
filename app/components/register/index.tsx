import React, { ChangeEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { SmartCaptcha } from "@yandex/smart-captcha"
import { accountsApi } from "../../store/api/accountsApi"
import { confirmEmailValidator, emailValidator } from "../../validators/index"
import AgreementCheckbox from "../form/AgreementCheckbox"
import Input from "../form/Input"

export interface Props {}

const yandexCaptchaKey = process.env.NEXT_PUBLIC_YANDEX_CAPTCHA_KEY

const agreementText = (
  <div>
    Я подтверждаю, что мне исполнилось 13 лет, и я принимаю условия{" "}
    <Link href="/">соглашения подписчика Steam</Link> и{" "}
    <Link href="/">соглашения о конфиденциальности Valve.</Link>
  </div>
)

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = React.useState("")
  const [confirmEmail, setConfirmEmail] = React.useState("")
  const [token, setToken] = React.useState("")
  const [isAgreementChecked, setIsAgreementChecked] = React.useState("")
  const [validationErrorMessage, setValidationErrorMessage] = React.useState({
    email: "",
    confirmEmail: "",
    captcha: "",
    agreement: "",
  })
  const [verifyEmail] = accountsApi.useVerifyEmailMutation()


//   const [creationId, setCreationId] = React.useState("")

//   const { data: checkEmailVerifiedStatus } =
//     accountsApi.useCheckEmailVerifiedQuery(
//       { creation_id: creationId },
//       { pollingInterval: 2000, skip: !creationId }
//     )

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    join()
  }

  const handleValidateForm = React.useCallback(() => {
    const emailValidationResult = emailValidator(email)
    const confirmEmailValidationResult = confirmEmailValidator(
      email,
      confirmEmail
    )

    setValidationErrorMessage({
      ...validationErrorMessage,
      email: emailValidationResult,
      confirmEmail: confirmEmailValidationResult,
    })
    return !emailValidationResult && !confirmEmailValidationResult
  }, [email, confirmEmail, token])

  const join = async () => {
    const formValidation = handleValidateForm()
    if (formValidation) {
      try {
        const result = await verifyEmail({
          email,
          token,
        })
        if (!result.error) {
          setCreationId(result.data.creation_id)
        }
      } catch {}
    }
  }

  return (
    <div>
      <div>{}</div>
      <h1>Создание аккаунта</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          setValue={setEmail}
          label={"Адрес эл. почты"}
          autocomplete
        />
        <Input
          value={confirmEmail}
          setValue={setConfirmEmail}
          label={"Подтвердите адрес эл. почты"}
          autocomplete
        />
        <SmartCaptcha
          sitekey={yandexCaptchaKey}
          onSuccess={setToken}
          language={"ru"}
        />
        <AgreementCheckbox
          agreement={agreementText}
          setIsAgreementChecked={setIsAgreementChecked}
          isAgreementChecked={isAgreementChecked}
        />
        <button onClick={join}>Зарегистрироваться</button>
      </form>
    </div>
  )
}
