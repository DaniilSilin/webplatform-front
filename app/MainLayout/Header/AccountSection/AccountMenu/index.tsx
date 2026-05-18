import React from 'react'
import { useAppSelector } from '@/app/store/hooks'

export default function AccountMenu() {
  const user = useAppSelector(state => state.djangoSlice.user)
  return (
    <div>
      {user.username}
    </div>
  )
}