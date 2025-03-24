'use mobile'

import Modal from 'react-modal'
import { NavButton } from './NavButton'
import { useEffect, useState } from 'react'
// import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { GrDownload } from 'react-icons/gr'
import styled from 'styled-components'
import ReactModal from 'react-modal'

// const navLinks = [
//   {
//     id: 'start-section',
//     text: 'Start',
//     href: '#',
//   },
//   {
//     id: 'services-section',
//     text: 'Usługi',
//     href: '#',
//   },
//   {
//     id: 'projects-section',
//     text: 'Projekty',
//     href: '#',
//   },
//   {
//     id: 'about-section',
//     text: 'O mnie',
//     href: '#',
//   },
//   {
//     id: 'contact-section',
//     text: 'Kontakt',
//     href: '#',
//   },
// ]

const NavLink = styled.a`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem 0;
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
`

const DisabledLink = styled(NavLink)`
  pointer-events: none;
  opacity: 0.3;
`

export function NavMobile() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && document.getElementById('main')) {
      Modal.setAppElement('#main')
    }
  }, [])

  const handleOpenNav = () => {
    setNavOpen(true)
  }

  const handleCloseNav = () => {
    setNavOpen(false)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <NavButton onClick={handleOpenNav} isOpen={isNavOpen} />
      <ReactModal
        isOpen={isNavOpen}
        onRequestClose={handleCloseNav}
        style={{
          content: {
            top: 0,
            right: 0,
            height: '50%',
            borderRadius: '0 0 0 100%',
            zIndex: '10000',
            padding: '2rem',
            textAlign: 'right',
            border: 'none',
          },
          overlay: {
            zIndex: '9000',
          },
        }}
      >
        <nav>
          <DisabledLink href="/blog" aria-disabled onClick={handleOnClick}>
            <span>Blog</span> <MdArrowOutward />
          </DisabledLink>
          {/* <Line /> */}
          <NavLink
            href="/documents/cv.pdf"
            target="_blank"
            onClick={handleCloseNav}
          >
            <span>Życiorys</span>
            <GrDownload />
          </NavLink>
        </nav>
      </ReactModal>
    </>
  )
}
