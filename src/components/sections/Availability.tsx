import { plexMono } from '@/styles/Globals'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
    0%{
        transform: rotate(0) scale(1)
    }

    50%{
        transform: scale(1.2)
    }
    100%{
        transform: rotate(360deg) scale(1)
    }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: ${plexMono.style.fontFamily};

  position: absolute;
  left: -30%;
  bottom: -5%;
`

const Indicator = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  filter: blur(1px);
  background-image: linear-gradient(#0cdd66, #1ba356);
  animation: ${rotateAnimation} 3s linear infinite;
`

const Info = styled.p``

const DateInfo = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
`

export function Availability() {
  const [available, setAvailable] = useState(true)

  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    month: 'long',
    year: 'numeric',
  }).format(currentDate)

  return (
    <Container>
      <Indicator />

      {available ? (
        <Info>Otwarty na propozycje współpracy</Info>
      ) : (
        <Info>Aktualnie nie przyjmuje zleceń</Info>
      )}
      <DateInfo>{formattedDate}</DateInfo>
    </Container>
  )
}
