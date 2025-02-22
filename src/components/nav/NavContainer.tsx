'use client'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export function NavContainer({ children }: { children: React.ReactNode }) {
  return <Nav>{children}</Nav>
}
