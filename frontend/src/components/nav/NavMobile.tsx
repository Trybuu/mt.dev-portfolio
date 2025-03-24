'use mobile'

import Modal from 'react-modal'
import { NavButton } from './NavButton'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { GrDownload } from 'react-icons/gr'
import styled from 'styled-components'

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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  width: 300px;
  position: relative;
  outline: none;
`

const NavLink = styled.a`
  display: block;
  padding: 8px 0;
  font-size: 1rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`

const Line = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`

const DisabledLink = styled(Link)`
  pointer-events: none;
  opacity: 0.6;
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
      <Modal
        isOpen={isNavOpen}
        shouldCloseOnEsc={true}
        onRequestClose={handleCloseNav}
        shouldCloseOnOverlayClick={true}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <ModalOverlay>
          <ModalContent>
            <button
              onClick={handleCloseNav}
              className="absolute top-4 right-4 text-gray-600"
            >
              Zamknij
            </button>
            <nav>
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  href={link.href}
                  onClick={handleCloseNav}
                >
                  {link.text}
                </NavLink>
              ))}
              <Line />
              <DisabledLink
                href="/blog"
                aria-disabled
                className="flex items-center"
                onClick={handleOnClick}
              >
                <span>Blog</span> <MdArrowOutward className="ml-2" />
              </DisabledLink>
              <Line />
              <NavLink
                href="/documents/cv.pdf"
                target="_blank"
                className="flex items-center"
                onClick={handleCloseNav}
              >
                <span>Życiorys</span>
                <GrDownload className="ml-2" />
              </NavLink>
            </nav>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
