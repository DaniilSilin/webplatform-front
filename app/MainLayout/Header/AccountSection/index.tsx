import React from "react"
import { useAppSelector } from "@/app/store/hooks"
import Login from "./Login"

export interface Props {}

export default function AccountSection() {
  const user = useAppSelector(state => state.djangoSlice.user)

  return <div>{!user ? <div>123123</div> : <Login />}</div>
}
