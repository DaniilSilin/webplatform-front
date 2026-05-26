import React from "react"
import { useRouter } from "next/router"
import { accountsApi } from "@/app/store/api/accountsApi"
import styles from "./new_account_verificaton.module.css"

export interface Props {
    stoken: string
    creation_id: string
}

const verifyEmailSuccessfulDescription = (
  <>
    <div className={styles.newaccount_email_verified_text}>
      Вернитесь в предыдущее окно, чтобы завершить проверку адреса электронной
      почты.
    </div>
    <div className={styles.newaccount_email_verified_note}>
      *Вы можете закрыть это окно
    </div>
  </>
)

const verifyEmailUnsuccessfulDescription = (
  <>
    <div className={styles.newaccount_email_verified_note}>
      Этот запрос на подтверждение устарел. Пожалуйста, создайте аккаунт заново.
    </div>
  </>
)

export default function NewAccountVerification({ stoken, creation_id }: Props) {
  const router = useRouter()

  const { data: verifyEmailSuccessStatus } =
    accountsApi.useCompleteEmailVerifyQuery({
      secure_token: stoken,
      creation_id,
    })

  const hasData = !!verifyEmailSuccessStatus

  const descriptionText =
    hasData && verifyEmailSuccessStatus.success === 1
      ? verifyEmailSuccessfulDescription
      : verifyEmailUnsuccessfulDescription

  const headerText =
    hasData && verifyEmailSuccessStatus.success === 1
      ? "Электронная почта подтверждена"
      : "Не удалось подтвердить электронную почту"

  return (
    <div>
      <div className={styles.header_text}>{headerText}</div>
      <div>{descriptionText}</div>
    </div>
  )
}
