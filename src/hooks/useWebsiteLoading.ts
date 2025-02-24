import { useEffect, useState } from 'react'

export function useWebsiteLoading(): boolean {
  const [isWebsiteLoaded, setWebsiteLoaded] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleWebsiteLoad = () => {
      timeoutId = setTimeout(() => setWebsiteLoaded(true), 1000)
    }

    if (
      document.readyState === 'complete' ||
      document.readyState === 'interactive'
    ) {
      handleWebsiteLoad()
    } else {
      document.addEventListener('DOMContentLoaded', handleWebsiteLoad)
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleWebsiteLoad)
      clearTimeout(timeoutId)
    }
  }, [])

  return isWebsiteLoaded
}
