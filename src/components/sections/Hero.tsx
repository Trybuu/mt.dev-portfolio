'use client' // Ponieważ używamy animacji

import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import styled from 'styled-components'
import { useRef } from 'react'
import { useWebsiteLoading } from '@/hooks/useWebsiteLoading'

const Section = styled(motion.section)`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

const TextContent = styled(motion.div)`
  padding: ${({ theme }) => theme.containerPadding.mobile};
  opacity: 0;
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 50vw;
  height: 100vh;

  img {
    object-fit: cover;
  }
`

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isWebsiteLoaded = useWebsiteLoading()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <Section ref={ref}>
      <div>
        <TextContent
          initial={{ opacity: 0, y: 50 }}
          animate={isInView && isWebsiteLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            mollitia explicabo itaque exercitationem sequi nesciunt!
          </p>
        </TextContent>

        {/* <TextContent
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2>Nowy tekst po przewinięciu.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            felis vitae velit auctor fermentum.
          </p>
        </TextContent> */}
      </div>

      <div>
        <ImageWrapper
          style={{ scale: imageScale }}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView && isWebsiteLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/sumup-kRv6EgQ45IE-unsplash.jpg"
            alt="Zdjęcie"
            fill
            sizes="50vw"
          />
        </ImageWrapper>
      </div>
    </Section>
  )
}
