'use client'

import styled from 'styled-components'
import { SectionTitle } from '../ui/SectionTitle'
import { plexMono } from '@/styles/Globals'
import { motion, MotionValue, useTransform } from 'framer-motion'

const ServicesWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  opacity: 0;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 6fr;
  }
`

const ServiceDescription = styled.div`
  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`

const NumberWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 4rem;
  font-family: ${plexMono.style.fontFamily};
  padding: 2rem;
  width: 200px;
  height: 200px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`

export function Services({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) {
  const services = [
    {
      id: 1,
      title: 'Kompleksowe tworzenie stron internetowych',
      description:
        'Tworzę nowoczesne, szybkie i responsywne strony dopasowane do Twoich potrzeb – od projektu graficznego po wdrożenie.',
    },
    {
      id: 2,
      title: 'Unikalny design dopasowany do Twojej marki',
      description:
        'Tworzę nowoczesne, szybkie i responsywne strony dopasowane do Twoich potrzeb – od projektu graficznego po wdrożenie.',
    },
    {
      id: 3,
      title: 'Optymalizacja pod wyszukiwarki (SEO)',
      description:
        'Tworzę nowoczesne, szybkie i responsywne strony dopasowane do Twoich potrzeb – od projektu graficznego po wdrożenie.',
    },
    {
      id: 4,
      title: 'Wsparcie i rozwój strony',
      description:
        'Tworzę nowoczesne, szybkie i responsywne strony dopasowane do Twoich potrzeb – od projektu graficznego po wdrożenie.',
    },
  ]

  // Efekt parallax dla numeracji usług
  const numberScale = useTransform(scrollYProgress, [0, 1], [1, 1.3])
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const servicesElements = services.map((service) => {
    return (
      <ServicesWrapper
        key={service.id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <NumberWrapper style={{ scale: numberScale }}>
          {service.id.toString().padStart(2, '0')}
        </NumberWrapper>
        <ServiceDescription>
          <motion.h3
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {service.title}
          </motion.h3>
          <p>{service.description}</p>
        </ServiceDescription>
      </ServicesWrapper>
    )
  })

  return (
    <section>
      <SectionTitle title="Czego potrzebujesz" />
      {servicesElements}
    </section>
  )
}
