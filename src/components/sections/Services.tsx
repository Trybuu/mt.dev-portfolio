'use client'

import styled from 'styled-components'
import { SectionTitle } from '../ui/SectionTitle'
import { plexMono } from '@/styles/Globals'

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`

const ServiceDescription = styled.div`
  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`

const NumberWrapper = styled.div`
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

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Kompleksowe tworzenie stron internetowych',
      description:
        'Tworzę nowoczesne, szybkie i responsywne strony dopasowane do Twoich potrzeb – od projektu graficznego po wdrożenie.',
    },
    {
      id: 2,
      title: 'Unikaln design dopasowany do Twojej marki',
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

  const servicesElements = services.map((service) => {
    return (
      <ServicesWrapper key={service.id}>
        <NumberWrapper>{service.id.toString().padStart(2, '0')}</NumberWrapper>
        <ServiceDescription>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </ServiceDescription>
      </ServicesWrapper>
    )
  })

  return (
    <section>
      <SectionTitle title="Czego potrzebujesz" />
      {servicesElements && servicesElements}
    </section>
  )
}
