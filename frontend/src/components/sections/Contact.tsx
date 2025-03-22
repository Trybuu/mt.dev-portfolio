import { useState } from 'react'
import styled from 'styled-components'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'
import { HiMiniArrowUturnLeft, HiMiniArrowUturnRight } from 'react-icons/hi2'
import { plexMono } from '@/styles/Globals'
import { MdArrowOutward } from 'react-icons/md'

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
  min-height: 90vh;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  transform: ${({ $isFlipped }) =>
    $isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`

const Section = styled.section`
  position: absolute;
  width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* min-height: 90vh; */
  width: 100%;
  border-radius: 2rem;
`

const SectionFront = styled(Section)`
  z-index: 2;
`

const SectionBack = styled(Section)`
  padding: 1rem;
  gap: 4rem;
  transform: rotateY(180deg);

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 2rem 4rem;
    gap: 12rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 12rem;
  }
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
  transition: 0.2s ease-in-out;
  cursor: pointer;
`

const ButtonGhost = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    padding: 1rem 0;
    font-family: ${plexMono.style.fontFamily};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  textarea {
    height: 8rem;
    resize: none;
  }

  button {
    margin-top: 1rem;
  }
`

export function Contact() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Wrapper id="contact-section">
      <WrapperInner $isFlipped={isFlipped}>
        <SectionFront>
          <div>
            <Subtitle dark={false}>(Napisz do mnie jeśli)</Subtitle>
            <Title textAlign="center">Chcesz współpracować</Title>
          </div>

          <Button onClick={() => setIsFlipped(!isFlipped)}>
            <span>Skontaktuj się ze mną</span> <HiMiniArrowUturnRight />
          </Button>
        </SectionFront>

        <SectionBack>
          <div>
            <ButtonGhost onClick={() => setIsFlipped(!isFlipped)}>
              <HiMiniArrowUturnLeft />
            </ButtonGhost>

            <Title>Gotowy na współpracę?</Title>

            <Form action="">
              <input type="text" placeholder="Twoje imię" />
              <input type="text" placeholder="Twój e-mail" />
              <textarea placeholder="Twoja wiadomość" />
              <Button>
                Wyślij <MdArrowOutward />
              </Button>
            </Form>
          </div>
        </SectionBack>
      </WrapperInner>
    </Wrapper>
  )
}
