import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import styled from 'styled-components'

const Info = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`

export function CurrentPageInfo({ info }: { info: string }) {
  const dimensions = useWindowDimensions()

  console.log(dimensions)

  if (dimensions.width < 1024) return null

  return <Info>({info})</Info>
}
