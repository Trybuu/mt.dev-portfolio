'use client' // Ponieważ używamy animacji

import Image from 'next/image'
import { motion, MotionValue, useInView, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { useRef } from 'react'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { plexMono } from '@/styles/Globals'

const Section = styled(motion.section)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  /* background-color: white; */
  z-index: -1;
`

const TextContent = styled(motion.div)`
  width: 50%;
  padding: ${({ theme }) => theme.containerPadding.mobile};
  opacity: 0;
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;

  div {
    top: 90%;
    left: 0;
    position: absolute;
    font-family: ${plexMono.style.fontFamily};
    text-transform: uppercase;
    color: #706c61;
  }
`

const StyledImage = styled(motion(Image))`
  border-radius: 0.5rem;
`

const StyledLinkButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 0.5rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  background-color: black;
  border-radius: 2rem;
  color: #e0ded8;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`

export function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isWebsiteLoaded = useWebsiteLoading()
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.7])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <Section ref={ref} style={{ opacity, translateY }}>
      <TextContent
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <MdOutlineArrowOutward style={{ rotate: '90deg' }} />
        <h2>Witaj, mam na imię Marek.</h2>
        <p>
          Specjalizuję się w tworzeniu szybkich i funkcjonalnych stron
          internetowych, które odpowiadają na potrzeby klientów.
        </p>
        <StyledLinkButton href="#">
          Kontakt <MdOutlineArrowOutward />
        </StyledLinkButton>
      </TextContent>

      <ImageWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <StyledImage
          style={{ scale }}
          src={'/images/jake-nackos-CUYWM4KoFig-unsplash.jpg'}
          alt="-"
          width={200} // Określ szerokość obrazka
          height={300} // Określ wysokość obrazka
          // layout="responsive" // Może być 'intrinsic', 'fixed', 'responsive'
          priority
        />

        <div>
          <p>Otwarty na propozycje współpracy</p>
          <h3>Luty 2025</h3>
        </div>
      </ImageWrapper>

      {/* <TextContent
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <p>Otwarty na propozycje współpracy</p>
        <p>Luty 2025</p>
      </TextContent> */}
    </Section>
  )
}
