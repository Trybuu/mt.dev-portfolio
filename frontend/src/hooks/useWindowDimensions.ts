'use client'
import { useEffect, useState } from 'react'

export function useWindowDimensions(): { width: number; height: number } {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? screen.width : 0,
    height: typeof window !== 'undefined' ? screen.height : 0,
  })

  useEffect(() => {
    const onWindowResize = () => {
      setDimensions({
        width: screen.width,
        height: screen.height,
      })
    }

    window.addEventListener('resize', onWindowResize)

    return () => window.removeEventListener('resize', onWindowResize)
  }, [])

  return dimensions
}
