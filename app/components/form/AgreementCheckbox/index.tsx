import React, { ChangeEvent } from "react"

import styles from './agreement_checkbox.module.css'

export interface Props {
  agreement: string
  setIsAgreementChecked: (value: boolean) => void
  isAgreementChecked: boolean
}

export default function AgreementCheckbox({
  agreement,
  setIsAgreementChecked,
  isAgreementChecked,
}: Props) {
  const handleToggleCheckbox = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIsAgreementChecked(e.target.checked)
    },
    [setIsAgreementChecked]
  )
  return (
    <label>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isAgreementChecked}
        onChange={handleToggleCheckbox}
      />
      {agreement}
    </label>
  )
}
