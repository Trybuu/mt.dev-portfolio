'use client'

import { NavMobile } from './NavMobile'
import styled from 'styled-components'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: center;
  padding: ${({ theme }) => theme.containerPadding.mobile};
  z-index: 100;

  @media screen and (orientation: landscape) and (min-width: 1024px) {
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (orientation: landscape) and (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

export function NavContainer({
  children,
  scrollYProgress,
}: {
  children: React.ReactNode
  scrollYProgress: MotionValue<number>
}) {
  const dimensions = useWindowDimensions()
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
      {dimensions.width < 1024 ? <NavMobile /> : null}
    </Nav>
  )
}
