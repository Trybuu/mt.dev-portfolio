'use client'
import { PortfolioNav } from '@/components/nav/PortfolioNav'
import { Hero } from '@/components/sections/Hero'
import { WebsiteLoading } from '@/components/ui/WebsiteLoading'
import { theme } from '@/styles/Theme'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const StickyContainer = styled(motion.div)`
  position: relative;
  /* height: 200vh; */
`

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <ThemeProvider theme={theme}>
      <WebsiteLoading />
      <PortfolioNav scrollYProgress={scrollYProgress} />
      <StickyContainer>
        <Hero scrollYProgress={scrollYProgress} />
        {/* <Services scrollYProgress={scrollYProgress} /> */}
        {/* <Services scrollYProgress={scrollYProgress} /> */}
      </StickyContainer>
    </ThemeProvider>
  )
}
