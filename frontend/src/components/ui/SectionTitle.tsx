import { MdOutlineArrowOutward } from 'react-icons/md'
import styled from 'styled-components'
import { Title } from './Title'
import { motion } from 'framer-motion'

const TitleWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 2fr 6fr;
  }
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
