'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'
import { useEffect, useState } from 'react'

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export function WebsiteLoading() {
  const [fadeOut, setFadeOut] = useState<boolean>(false)
  const isWebsiteLoaded: boolean = useWebsiteLoading()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (isWebsiteLoaded) {
      timeoutId = setTimeout(() => setFadeOut(true), 1000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isWebsiteLoaded])

  if (!fadeOut) {
    return (
      <LoadingScreen
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1 }}
      ></LoadingScreen>
    )
  }

  return null
}
