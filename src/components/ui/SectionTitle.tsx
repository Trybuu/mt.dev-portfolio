import { MdOutlineArrowOutward } from 'react-icons/md'
import styled from 'styled-components'
import { Title } from './Title'

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  margin-bottom: 2rem;
`

const StyledArrowOutward = styled(MdOutlineArrowOutward)`
  font-size: 4rem;
  transform: rotate(90deg);
`

export function SectionTitle({ title }: { title: string }) {
  return (
    <TitleWrapper>
      <StyledArrowOutward />
      <Title>{title}</Title>
    </TitleWrapper>
  )
}
