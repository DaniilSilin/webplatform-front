import React, { ChangeEvent } from "react"
import { useRouter } from "next/router"
import { useRegisterMutation } from "@/app/store/api/accountsApi"
import Input from "../form/Input"

export interface Props {}

export default function PasswordReset() {
  const router = useRouter()
  const [email, setEmail] = React.useState("")

  const [registerUser] = useRegisterMutation()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    register()
  }

  const register = async () => {
    try {
      const result = await registerUser({
        username,
        email,
        password,
        confirm_password: confirmPassword,
      })
      if (!result.error) {
        router.push("login/")
      }
    } catch {}
  }

  return (
    <div>
      <h1>Зарегистрироваться</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          setValue={setUsername}
          label={"Имя пользователя"}
        />
        <Input value={email} setValue={setEmail} label={"Email"} />
        <Input value={password} setValue={setPassword} label={"Пароль"} />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          label={"Подтвердите пароль"}
        />
        <button onClick={register}>Зарегистрироваться</button>
      </form>
    </div>
  )
}
