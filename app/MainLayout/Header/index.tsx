import React from "react"
import { HiOutlineMenu } from "react-icons/hi"
import Input from "../../components/form/Input"
import styles from "./header.module.css"

export interface Props {
}

export default function Header() {
  const [value, setValue] = React.useState("")

  const handleToggleMenuButton = React.useCallback(() => {
    setDisplaySider(value => !value)
  }, [])

  return (
    <header className={styles.root}>
      <div>
        <div onClick={handleToggleMenuButton}>
          <HiOutlineMenu />
        </div>
        NewTube
      </div>
      <div>
        <Input value={value} setValue={setValue} width={540} height={40} />
      </div>
      <div></div>
    </header>
  )
}
