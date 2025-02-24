'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  min-height: 300vh; /* Długi scroll */
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
`

const Layer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
`

export function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Śledzenie przewijania
  })

  // Animacja opacity i Y (przesunięcie)
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 0, -100])
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0])

  const y2 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [100, 0, -100])
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0])

  const y3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [100, 0, 0])
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1])

  return (
    <Section ref={ref}>
      <StickyContainer>
        <Layer style={{ backgroundColor: 'green', opacity: opacity1, y: y1 }}>
          <h2>HOW CAN I HELP YOU?</h2>
        </Layer>

        <Layer style={{ backgroundColor: 'yellow', opacity: opacity2, y: y2 }}>
          <h2>Service 1</h2>
        </Layer>

        <Layer style={{ backgroundColor: 'red', opacity: opacity3, y: y3 }}>
          <h2>Service 2</h2>
        </Layer>
      </StickyContainer>
    </Section>
  )
}
