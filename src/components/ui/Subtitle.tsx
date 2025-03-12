import { plexMono } from '@/styles/Globals'
import styled from 'styled-components'

const Text = styled.p<{ $dark: boolean }>`
  color: ${({ $dark, theme }) =>
    $dark ? theme.colors.secondary : theme.colors.primary};
  font-family: ${plexMono.style.fontFamily};
  text-align: center;
  text-transform: lowercase;
`

export function Subtitle({
  dark = false,
  children,
}: {
  dark?: boolean
  children: React.ReactNode
}) {
  return <Text $dark={dark}>{children}</Text>
}
