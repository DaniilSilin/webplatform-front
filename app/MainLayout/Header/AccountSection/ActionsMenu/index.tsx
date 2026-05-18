import React from 'react'
import { useAppSelector } from '@/app/store/hooks'

export default function ActionsMenu() {
  const user = useAppSelector(state => state.djangoSlice.user)
  return (
    <div>
      {user.username}
    </div>
  )
}