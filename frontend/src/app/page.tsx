'use client'
import { PortfolioNav } from '@/components/nav/PortfolioNav'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { SectionsWrapper } from '@/components/ui/SectionsWrapper'
import { WebsiteLoading } from '@/components/ui/WebsiteLoading'
import { theme } from '@/styles/Theme'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const StickyContainer = styled(motion.div)`
  position: relative;
  z-index: 0;
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
      <div
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'black',
          color: 'white',
          padding: '1rem',
          zIndex: '100',
          opacity: '50%',
        }}
      >
        Work in Progress
      </div>
      <StickyContainer>
        <Hero scrollYProgress={scrollYProgress} />
        <SectionsWrapper>
          {(scrollYProgress) => <Services scrollYProgress={scrollYProgress} />}

          {/* <Projects /> */}
        </SectionsWrapper>
        <About />
        <Contact />
        <Footer />
      </StickyContainer>
    </ThemeProvider>
  )
}
