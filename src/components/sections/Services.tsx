'use client'
import { motion, MotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'

const Section = styled(motion.section)`
  position: relative;
  /* min-height: 150vh; */
  padding: ${({ theme }) => theme.containerPadding.mobile};
  background-color: #222;
  color: white;
  z-index: 100;
  border-radius: 1rem 1rem 0 0;
`

export function Services({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1])
  return (
    <Section style={{ scale }}>
      <h2>How can I help you</h2>

      <div>
        <span>01.</span>
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit
          fugit consequuntur doloribus voluptatem officia numquam praesentium
          eos ipsum quia error exercitationem nobis adipisci vitae dolorum
          maxime repellendus quas sint ratione illum, rem architecto? Asperiores
          perspiciatis ipsum dicta repudiandae rem maxime. Voluptates numquam
          eaque nam ad voluptate dicta dolorum labore!
        </p>
      </div>

      <div>
        <span>02.</span>
        <h3>SEO</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit
          fugit consequuntur doloribus voluptatem officia numquam praesentium
          eos ipsum quia error exercitationem nobis adipisci vitae dolorum
          maxime repellendus quas sint ratione illum, rem architecto? Asperiores
          perspiciatis ipsum dicta repudiandae rem maxime. Voluptates numquam
          eaque nam ad voluptate dicta dolorum labore!
        </p>
      </div>

      <div>
        <span>03.</span>
        <h3>Mobile Applications</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe velit
          fugit consequuntur doloribus voluptatem officia numquam praesentium
          eos ipsum quia error exercitationem nobis adipisci vitae dolorum
          maxime repellendus quas sint ratione illum, rem architecto? Asperiores
          perspiciatis ipsum dicta repudiandae rem maxime. Voluptates numquam
          eaque nam ad voluptate dicta dolorum labore!
        </p>
      </div>
    </Section>
  )
}
