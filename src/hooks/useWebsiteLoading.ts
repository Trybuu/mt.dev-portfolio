import { useEffect, useState, useRef } from 'react'

export function useWebsiteLoading(): boolean {
  const [isWebsiteLoaded, setWebsiteLoaded] = useState<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleWebsiteLoad = () => {
      timeoutId.current = setTimeout(() => setWebsiteLoaded(true), 1000)
    }

    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      handleWebsiteLoad()
    } else {
      document.addEventListener('DOMContentLoaded', handleWebsiteLoad, {
        once: true,
      })
    }

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }
    }
  }, [])

  return isWebsiteLoaded
}
