'use client'

import Image from 'next/image'
import { motion, MotionValue, useInView, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { useRef } from 'react'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Availability } from './Availability'

const Section = styled(motion.section)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: ${({ theme }) => theme.containerPadding.mobile};
  opacity: 0;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.bright};
  }
`

const Paragraph = styled.p`
  /* width: 100%;  */

  /* @media screen and (orientation: landscape) and (min-width: 1024px) {
    width: 50%;
  } */
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 40%;
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
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 2rem;
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
        <Title>
          <span>
            <MdOutlineArrowOutward style={{ rotate: '90deg' }} />
          </span>
          <span>Witaj, mam na imię Marek.</span>
        </Title>
        <Paragraph>
          Specjalizuję się w tworzeniu szybkich i funkcjonalnych stron
          internetowych, które odpowiadają na potrzeby klientów.
        </Paragraph>
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
          style={{ scale, width: '50%', height: 'auto' }}
          src={'/images/jake-nackos-CUYWM4KoFig-unsplash.jpg'}
          alt="-"
          width={1500}
          height={2200}
          quality={100}
          priority
        />
        <Availability />
      </ImageWrapper>
    </Section>
  )
}
