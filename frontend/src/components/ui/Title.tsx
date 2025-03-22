import styled from 'styled-components'

const TitleText = styled.h2<{
  $dark: boolean
  $textAlign: 'left' | 'center' | 'right'
}>`
  font-size: 2rem;
  color: ${({ $dark, theme }) =>
    $dark ? theme.colors.secondary : theme.colors.primary};
  text-align: ${({ $textAlign }) => $textAlign};
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`

export function Title({
  dark = false,
  textAlign = 'left',
  children,
}: {
  dark?: boolean
  textAlign?: 'left' | 'center' | 'right'
  children: React.ReactNode
}) {
  return (
    <TitleText $dark={dark} $textAlign={textAlign}>
      {children}
    </TitleText>
  )
}
