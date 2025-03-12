import styled from 'styled-components'

const TitleText = styled.h2<{ $dark: boolean }>`
  font-size: 3rem;
  color: ${({ $dark, theme }) =>
    $dark ? theme.colors.secondary : theme.colors.primary};
  text-transform: uppercase;
`

export function Title({
  dark = false,
  children,
}: {
  dark?: boolean
  children: React.ReactNode
}) {
  return <TitleText $dark={dark}>{children}</TitleText>
}
