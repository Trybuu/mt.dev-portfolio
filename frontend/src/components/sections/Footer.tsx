import { plexMono } from '@/styles/Globals'
import Link from 'next/link'
import { IoMdArrowUp } from 'react-icons/io'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${({ theme }) => theme.containerPadding.mobile};

  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

const Section = styled.section`
  width: 100%;

  h2 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  ul {
    padding: 1rem 0;
    list-style: none;
  }

  li {
  }

  a {
    font-family: ${plexMono.style.fontFamily};
    color: ${({ theme }) => theme.colors.accent};
  }
`

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  height: 6rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
`

export function Footer() {
  return (
    <FooterWrapper>
      <Section>
        <header>
          <h2>Menu</h2>
        </header>
        <ul>
          <li>
            <Link href={'#'}>Start</Link>
          </li>
          <li>
            <Link href={'#'}>Usługi</Link>
          </li>
          <li>
            <Link href={'#'}>Projekty</Link>
          </li>
          <li>
            <Link href={'#'}>O mnie</Link>
          </li>
          <li>
            <Link href={'#'}>Kontakt</Link>
          </li>
        </ul>
      </Section>
      <Section>
        <header>
          <h2>Social Media</h2>
        </header>
        <ul>
          <li>
            <Link href={'#'}>Linkedin</Link>
          </li>
          <li>
            <Link href={'#'}>Github</Link>
          </li>
          <li>
            <Link href={'#'}>Useme</Link>
          </li>
          <li>
            <Link href={'#'}>LeetCode</Link>
          </li>
        </ul>
      </Section>
      <section>
        <ButtonLink href="#" aria-label="Przewiń na górę">
          <IoMdArrowUp />
        </ButtonLink>
      </section>
    </FooterWrapper>
  )
}
