import { HiOutlineMenuAlt4 } from 'react-icons/hi'
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

export function NavButton() {
  return (
    <Button>
      <HiOutlineMenuAlt4 />
    </Button>
  )
}
