'use client'

import { MotionValue } from 'framer-motion'
import { Logo } from '../ui/Logo'
import { LinksGroup } from './LinksGroup'
import { NavContainer } from './NavContainer'
import { CurrentPageInfo } from './CurrentPageInfo'

export function PortfolioNav({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  return (
    <NavContainer scrollYProgress={scrollYProgress}>
      <Logo />
      <CurrentPageInfo info="Web Developer Portfolio" />
      <LinksGroup />
    </NavContainer>
  )
}
