import React, { ChangeEvent } from "react"

import { MdOutlineClear } from "react-icons/md"
import { FaRegKeyboard } from "react-icons/fa6";
import Keyboard from 'react-simple-keyboard';
import KeyboardContext from "@/app/contexts/Keyboard";

import 'react-simple-keyboard/build/css/index.css';
import styles from "./input.module.css"

export interface Props {
  value: string
  setValue: (value: string) => void
  width: number
  height: number
}

export default function Input({ value, width, height, setValue }: Props) {
  const [isFocused, setIsFocused] = React.useState(false)

  const setDisplayKeyboard = React.useContext(KeyboardContext);

  const handleFocus = React.useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = React.useCallback(() => {
    setIsFocused(true)
  }, [])

  const valueOnChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const handleClearInput = React.useCallback(() => {
    setValue("")
  }, [])

  const handleToggleKeyboard = React.useCallback(() => {
    setDisplayKeyboard((prev) => !prev)
  }, [])

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  React.useEffect(() => {

  }, [])

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.mainInput}
          type={"text"}
          style={{ width, height }}
          placeholder="Введите запрос"
          onFocus={handleFocus}
          onChange={valueOnChange}
          value={value}
          spellCheck={false}
        />
      </form>
      {value && (
        <div onClick={handleClearInput} className={styles.clearButton}>
          <MdOutlineClear />
        </div>
      )}
      <div onClick={handleToggleKeyboard} className={styles.keyboard}>
        <FaRegKeyboard />
      </div>
    </div>
  )
}
