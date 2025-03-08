'use client'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 50%;
`

export function NavButton({
  onClick,
  isOpen,
}: {
  onClick: () => void
  isOpen: boolean
}) {
  return (
    <Button onClick={onClick}>
      {isOpen ? <IoMdClose /> : <HiOutlineMenuAlt4 />}
    </Button>
  )
}
