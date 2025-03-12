import { useState } from 'react'
import styled from 'styled-components'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'
import { FaArrowRotateRight } from 'react-icons/fa6'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.containerPadding.mobile};

  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

const WrapperInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 90vh;
  transition: transform 1s;
  transform-style: preserve-3d;

  transform: ${({ $isFlipped }) =>
    $isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 90vh;
  width: 100%;
  border-radius: 2rem;
`

const SectionFront = styled(Section)`
  z-index: 2;
`

const SectionBack = styled(Section)`
  transform: rotateY(180deg);
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bolder;
  text-transform: uppercase;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
`

export function Contact() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Wrapper>
      <WrapperInner $isFlipped={isFlipped}>
        <SectionFront>
          <div>
            <Subtitle dark={false}>(Napisz do mnie jeśli)</Subtitle>
            <Title>Chcesz współpracować</Title>
          </div>

          <Button onClick={() => setIsFlipped(!isFlipped)}>
            <span>Skontaktuj się ze mną</span> <FaArrowRotateRight />
          </Button>
        </SectionFront>

        <SectionBack>
          <div>
            <Subtitle dark={false}>(Napisz do mnie jeśli)</Subtitle>
            <Title>Chcesz współpracować</Title>
          </div>

          <Button onClick={() => setIsFlipped(!isFlipped)}>
            <span>Wróć</span> <FaArrowRotateRight />
          </Button>
        </SectionBack>
      </WrapperInner>
    </Wrapper>
  )
}
