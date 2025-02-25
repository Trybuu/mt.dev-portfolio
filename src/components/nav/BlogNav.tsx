import { useScroll } from 'framer-motion'
import { Logo } from '../ui/Logo'
import { NavContainer } from './NavContainer'

export function BlogNav() {
  const { scrollYProgress } = useScroll()

  return (
    <NavContainer scrollYProgress={scrollYProgress}>
      <Logo />
    </NavContainer>
  )
}
