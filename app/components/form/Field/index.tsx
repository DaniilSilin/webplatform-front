import React, { ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

export default function Field({ children }) {
  return (
    <div >
      {children}
    </div>
  )
}