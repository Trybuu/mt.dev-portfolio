'use client'
import { MotionValue, useScroll } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem 1rem 0 0;
  padding: ${({ theme }) => theme.containerPadding.mobile};

  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

export function SectionsWrapper({
  children,
}: {
  children: (scrollYProgress: MotionValue<number>) => React.ReactNode
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return <Wrapper>{children(scrollYProgress)}</Wrapper>
}
