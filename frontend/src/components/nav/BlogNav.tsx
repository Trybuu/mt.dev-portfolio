'use client'

import { useScroll } from 'framer-motion'
import { Logo } from '../ui/Logo'
import { NavContainer } from './NavContainer'
import { CurrentPageInfo } from './CurrentPageInfo'

export function BlogNav() {
  const { scrollYProgress } = useScroll()

  return (
    <NavContainer scrollYProgress={scrollYProgress}>
      <Logo />
      <CurrentPageInfo info="Web Developer Blog" />
    </NavContainer>
  )
}
