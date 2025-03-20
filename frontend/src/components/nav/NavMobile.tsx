'use mobile'

import Modal from 'react-modal'
import { NavButton } from './NavButton'
import { useEffect, useState } from 'react'

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

  return (
    <>
      <NavButton onClick={handleOpenNav} isOpen={isNavOpen} />
      <Modal
        isOpen={isNavOpen}
        shouldCloseOnEsc={true}
        onRequestClose={handleCloseNav}
      >
        Modal
      </Modal>
    </>
  )
}
