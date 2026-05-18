import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { setCookie } from "cookies-next"
import { accountsApi } from "../../store/api/accountsApi"
import Input from "../form/Input"

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const [login] = accountsApi.useLoginMutation()
  const [retrieveProfile] = accountsApi.useLazyRetrieveProfileQuery()

  const loginUser = async () => {
    try {
      const result = await login({ username, password })
      if (!result.error) {
        setCookie("access", result.data.access, { maxAge: 60 * 60 * 24 })
        setCookie("refresh", result.data.refresh, { maxAge: 60 * 60 * 24 })
        // @ts-ignore
        retrieveProfile("")
        router.push("/")
      }
    } catch (e) {
      console.error("Error:", e)
    }
  }

  return (
    <div>
      <Input value={username} setValue={setUsername} label="Имя пользователя" />
      <Input value={password} setValue={setPassword} label="Пароль" />
      <button onClick={loginUser}>Войти</button>
      <div>
        <Link href={"/register"}>Зарегистрироваться</Link> 
      </div>
    </div>
  )
}
