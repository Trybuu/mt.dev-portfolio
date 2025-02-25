import { MotionValue } from 'framer-motion'
import { Logo } from '../ui/Logo'
import { LinksGroup } from './LinksGroup'
import { NavContainer } from './NavContainer'

export function PortfolioNav({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  return (
    <NavContainer scrollYProgress={scrollYProgress}>
      <Logo />
      <span>(Web Developer)</span>
      <LinksGroup />
    </NavContainer>
  )
}
