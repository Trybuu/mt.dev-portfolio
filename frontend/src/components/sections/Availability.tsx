import { plexMono } from '@/styles/Globals'
import { useEffect, useState } from 'react'
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

const Indicator = styled.div<{ $green: boolean }>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  filter: blur(1px);
  background-image: ${({ $green }) =>
    $green
      ? 'linear-gradient(#0cdd66, #1ba356)'
      : 'linear-gradient(#e21c0e, #81150d)'};
  animation: ${rotateAnimation} 3s linear infinite;
`

const Info = styled.p``

const DateInfo = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
`

async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337'

  try {
    const response = await fetch(baseUrl + path)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export function Availability() {
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getStrapiData('/api/work-status')
        setAvailable(data.data.isAvailable)
        console.log(data.data.isAvailable)
      } catch (error) {
        console.error('Błąd podczas pobierania danych z Strapi:', error)
      }
    }
    getData()
  }, [])

  const currentDate = new Date()
  const formattedDate = new Intl.DateTimeFormat('pl-PL', {
    month: 'long',
    year: 'numeric',
  }).format(currentDate)

  return (
    <Container>
      <Indicator $green={available} />

      {available ? (
        <Info>Otwarty na propozycje współpracy</Info>
      ) : (
        <Info>Aktualnie nie przyjmuje zleceń</Info>
      )}
      <DateInfo>{formattedDate}</DateInfo>
    </Container>
  )
}
