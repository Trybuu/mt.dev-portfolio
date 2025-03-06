import { useEffect, useState } from 'react'

export function useWindowDimensions(): { width: number; height: number } {
  const [dimensions, setDimensions] = useState({
    width: screen.width,
    height: screen.height,
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
