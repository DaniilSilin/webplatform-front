import { useEffect, useRef } from 'react'

export const useClickOutside = (callback: () => void) => {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      //@ts-expect-error
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [callback])
  return ref
}
