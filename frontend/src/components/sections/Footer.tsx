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

const ButtonLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  height: 6rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 50%;
  cursor: pointer;
`

const navLinks = [
  {
    id: 'start-section',
    text: 'Start',
    href: '#',
  },
  {
    id: 'services-section',
    text: 'Usługi',
    href: '#',
  },
  {
    id: 'projects-section',
    text: 'Projekty',
    href: '#',
  },
  {
    id: 'about-section',
    text: 'O mnie',
    href: '#',
  },
  {
    id: 'contact-section',
    text: 'Kontakt',
    href: '#',
  },
]

export function Footer() {
  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  // funkcja przewijania dla przycisku "w górę"
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const navElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id}>
        <Link href={navLink.href} onClick={(e) => handleOnClick(e, navLink.id)}>
          {navLink.text}
        </Link>
      </li>
    )
  })
  return (
    <FooterWrapper>
      <Section>
        <header>
          <h2>Menu</h2>
        </header>
        <ul>{navElements}</ul>
      </Section>
      <Section>
        <header>
          <h2>Social Media</h2>
        </header>
        <ul>
          <li>
            <Link
              href={'https://www.linkedin.com/in/trybulamarek/'}
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link href={'https://github.com/trybuu'} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link href={'https://leetcode.com/u/Trybuu/'} target="_blank">
              LeetCode
            </Link>
          </li>
        </ul>
      </Section>
      <section>
        <ButtonLink aria-label="Przewiń na górę" onClick={handleScrollToTop}>
          <IoMdArrowUp />
        </ButtonLink>
      </section>
    </FooterWrapper>
  )
}
