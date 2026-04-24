import React from "react"

import classNames from "classnames"
import { HiOutlineMenu } from "react-icons/hi"
import styles from "./sider.module.css"

export interface Props {
  displaySider: boolean
  setDisplaySider: (value: boolean) => void
}

export default function Sider({ displaySider, setDisplaySider }: Props) {
  const toggleSider = React.useCallback(() => {
    setDisplaySider((prev) => !prev)
  }, [])

  return (
    <div className={classNames(styles.root, {[styles.closed]: !displaySider })}>
      <div className={styles.header}>
        <div onClick={toggleSider}>
          <HiOutlineMenu size={24} />
        </div>
        <div>NewTube</div>
      </div>
    </div>
  )
}
