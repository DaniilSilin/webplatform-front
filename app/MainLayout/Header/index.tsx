import React from "react"
import { HiOutlineMenu } from "react-icons/hi"
import Input from "../../components/form/HeaderInput"
import AccountSection from "./AccountSection"
import styles from "./header.module.css"

export interface Props {
  displaySider: boolean
  setDisplaySider: (value: boolean) => void
}

export default function Header({ setDisplaySider }: Props) {
  const [value, setValue] = React.useState("")

  const toggleSider = React.useCallback(
    () => setDisplaySider(prev => !prev),
    []
  )

  return (
    <header className={styles.root}>
      <div className={styles.leftPart}>
        <div className={styles.siderToggle} onClick={toggleSider}>
          <HiOutlineMenu size={24} />
        </div>
        <div>NewTube</div>
      </div>
      <div>
        <Input value={value} setValue={setValue} width={540} height={40} />
      </div>
      <AccountSection />
    </header>
  )
}
