'use client'

import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'
import { motion, MotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: ${({ theme }) => theme.containerPadding.mobile};
  z-index: 100;
`

export function NavContainer({
  children,
  scrollYProgress,
}: {
  children: React.ReactNode
  scrollYProgress: MotionValue<number>
}) {
  const isWebsiteLoaded = useWebsiteLoading()
  const translateY = useTransform(scrollYProgress, [0, 0.25], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  return (
    <Nav
      initial={{ opacity: 0, y: -200 }}
      animate={isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      style={{ translateY, opacity }}
    >
      {children}
    </Nav>
  )
}
