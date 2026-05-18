import { FaUser } from "react-icons/fa"
import Link from "next/link"
import styles from "./login.module.css"

export default function Login() {
  return (
    <Link href="/login" className={styles.root}>
      <FaUser />
      <div className={styles.loginText}>Войти</div>
    </Link>
  )
}
