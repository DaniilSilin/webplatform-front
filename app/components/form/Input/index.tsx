import React, { ChangeEvent } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import styles from "./input.module.css"

export interface Props {
  height?: number
  width?: number
  value: string
  setValue: (value: string) => void
  label: string
  isPassword?: boolean
  placeholder?: string
  autocomplete?: boolean
  validationMessage?: string
}

export default function Input({
  value,
  label,
  setValue,
  isPassword,
  placeholder,
  autocomplete,
  validationMessage,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false)

  const handleChangeValue = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  const inputType = isPassword && !isPasswordVisible ? "password" : "text";

  const handleTogglePasswordVisibility = React.useCallback(() => {
    setIsPasswordVisible(value => !value)
  }, [])

  return (
    <div>
      <div>{label}</div>
      <div className={styles.inputContainer}>
        <TextField
          type={inputType}
          value={value}
          onChange={handleChangeValue}
          placeholder={placeholder}
          style={{ backgroundColor: "white" }}
          autoComplete={autocomplete ? "on" : "off"}
          slotProps={{
            input: {
              endAdornment: isPassword && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                    size="small"
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
    </div>
  )
}
