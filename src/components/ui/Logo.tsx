import Link from 'next/link'
import styled from 'styled-components'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const LinkContainer = styled.div`
  padding: 1rem 0;
`

const StyledLink = styled(motion(Link))`
  font-weight: 600;
  display: inline-block;
  position: relative;
  cursor: pointer;
`

export function Logo() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 150, damping: 10 })
  const smoothY = useSpring(y, { stiffness: 150, damping: 10 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    const offsetX = (clientX - left - width / 2) / 5
    const offsetY = (clientY - top - height / 2) / 5

    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <LinkContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StyledLink href="/" style={{ x: smoothX, y: smoothY }}>
        mt.dev
      </StyledLink>
    </LinkContainer>
  )
}
