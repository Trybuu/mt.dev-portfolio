'use client'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const Button = styled.button`
  position: relative;
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
  cursor: pointer;
`

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  isOpen: boolean
}

export function NavButton({ onClick, isOpen, ...props }: NavButtonProps) {
  return (
    <Button onClick={onClick} {...props}>
      {isOpen ? <IoMdClose /> : <HiOutlineMenuAlt4 />}
    </Button>
  )
}
