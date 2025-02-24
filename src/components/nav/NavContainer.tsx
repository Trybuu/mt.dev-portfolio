'use client'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.containerPadding.mobile};
  z-index: 100;
`

export function NavContainer({ children }: { children: React.ReactNode }) {
  const isWebsiteLoaded = useWebsiteLoading()

  return (
    <Nav
      initial={{ opacity: 0, y: -200 }}
      animate={isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </Nav>
  )
}
