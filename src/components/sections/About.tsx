import Image from 'next/image'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.containerPadding.mobile};

  @media screen and (min-width: 1024px) {
    padding: ${({ theme }) => theme.containerPadding.laptop};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

export function About() {
  return (
    <StyledSection>
      <header>
        <p>(whoami)</p>
        <h2>Marek Trybuła</h2>
        <Image
          style={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          src={'/images/jake-nackos-CUYWM4KoFig-unsplash.jpg'}
          alt="-"
          width={150}
          height={220}
          quality={100}
          priority
        />
      </header>

      <section>
        <article>
          <h3>Kim jestem</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam,
            modi obcaecati officiis sunt molestias doloribus dolore iure
            laboriosam voluptatem.
          </p>
        </article>

        <article>
          <h3>Co mnie wyróżnia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam,
            modi obcaecati officiis sunt molestias doloribus dolore iure
            laboriosam voluptatem.
          </p>
        </article>
      </section>
    </StyledSection>
  )
}
