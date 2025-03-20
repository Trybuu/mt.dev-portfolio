import { plexMono } from '@/styles/Globals'
import styled from 'styled-components'

const Text = styled.p<{
  $dark: boolean
  $accent: boolean
  $align: 'left' | 'right' | 'center'
}>`
  color: ${({ $dark, $accent, theme }) =>
    $dark
      ? theme.colors.secondary
      : theme.colors.primary || $accent
      ? theme.colors.accent
      : null};
  font-family: ${plexMono.style.fontFamily};
  text-align: ${({ $align }) => $align};
  text-transform: lowercase;
`

export function Subtitle({
  dark = false,
  accent = false,
  align = 'center',
  children,
}: {
  dark?: boolean
  accent?: boolean
  align?: 'left' | 'right' | 'center'
  children: React.ReactNode
}) {
  return (
    <Text $dark={dark} $accent={accent} $align={align}>
      {children}
    </Text>
  )
}
