import styled from 'styled-components'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  min-height: 100vh;
  padding: ${({ theme }) => theme.containerPadding.mobile};

  @media (min-width: 1024px) {
    grid-template-columns: 0.4fr 1.6fr;
    padding: ${({ theme }) => theme.containerPadding.laptop};
    gap: 3rem;
  }

  @media (min-width: 1440px) {
    padding: ${({ theme }) => theme.containerPadding.desktop};
  }
`

const Articles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Article = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 1024px) {
    position: absolute;
    flex-direction: row;
    text-align: left;
  }

  .image-wrapper {
    width: 100%;
    max-width: 300px;
    height: auto;
  }

  .text-content {
    width: 100%;
    max-width: 500px;
    p {
      line-height: 1.6;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ul {
    list-style: none;
    padding: 0;

    li {
      button {
        display: flex;
        align-items: space-between;
        gap: 1rem;
        width: 100%;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.secondary};
        background: none;
        border: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          color: ${({ theme }) => theme.colors.accent};
          border-bottom-color: ${({ theme }) => theme.colors.accent};
        }

        p {
          text-align: left;
          width: 100%;
        }
      }
    }
  }
`

const aboutData = [
  {
    id: 0,
    displayNumber: '01',
    title: 'O mnie',
    text: 'Jestem frontend developerem z pasją do tworzenia nowoczesnych, responsywnych i intuicyjnych interfejsów użytkownika. Specjalizuję się w React, TypeScript i CSS-in-JS. Uwielbiam optymalizować wydajność aplikacji i dbać o doskonałe UX. Stale rozwijam swoje umiejętności, śledząc najnowsze trendy w web development. Cenię czysty kod, dostępność i dobrą współpracę zespołową. ',
    imageSrc: '/images/jake-nackos-CUYWM4KoFig-unsplash.jpg',
    imageAlit: 'Moje zdjęcie',
  },
  {
    id: 1,
    displayNumber: '02',
    title: 'Czym się zajmuje',
    text: 'Jestem frontend developerem z pasją do tworzenia nowoczesnych, responsywnych i intuicyjnych interfejsów użytkownika. Specjalizuję się w React, TypeScript i CSS-in-JS. Uwielbiam optymalizować wydajność aplikacji i dbać o doskonałe UX. Stale rozwijam swoje umiejętności, śledząc najnowsze trendy w web development. Cenię czysty kod, dostępność i dobrą współpracę zespołową. ',
    imageSrc: '/images/jake-nackos-CUYWM4KoFig-unsplash.jpg',
    imageAlit: 'Moje zdjęcie',
  },
  {
    id: 2,
    displayNumber: '03',
    title: 'Dokąd zmierzam',
    text: 'Jestem frontend developerem z pasją do tworzenia nowoczesnych, responsywnych i intuicyjnych interfejsów użytkownika. Specjalizuję się w React, TypeScript i CSS-in-JS. Uwielbiam optymalizować wydajność aplikacji i dbać o doskonałe UX. Stale rozwijam swoje umiejętności, śledząc najnowsze trendy w web development. Cenię czysty kod, dostępność i dobrą współpracę zespołową. ',
    imageSrc: '/images/jake-nackos-CUYWM4KoFig-unsplash.jpg',
    imageAlit: 'Moje zdjęcie',
  },
  {
    id: 3,
    displayNumber: '04',
    title: 'Czym się interesuje',
    text: 'Jestem frontend developerem z pasją do tworzenia nowoczesnych, responsywnych i intuicyjnych interfejsów użytkownika. Specjalizuję się w React, TypeScript i CSS-in-JS. Uwielbiam optymalizować wydajność aplikacji i dbać o doskonałe UX. Stale rozwijam swoje umiejętności, śledząc najnowsze trendy w web development. Cenię czysty kod, dostępność i dobrą współpracę zespołową. ',
    imageSrc: '/images/jake-nackos-CUYWM4KoFig-unsplash.jpg',
    imageAlit: 'Moje zdjęcie',
  },
]

export function About() {
  const [activeAboutItem, setActiveAboutItem] = useState<number>(0)

  const handleClick = (id: number) => {
    setActiveAboutItem(id)
  }

  const activeArticle = aboutData.find(
    (article) => article.id === activeAboutItem,
  )

  return (
    <StyledSection>
      <Nav>
        <header>
          <Subtitle accent={true} align="left">
            (whoami)
          </Subtitle>
          <Title dark={true}>Kim jestem i co mnie napędza</Title>
        </header>
        <ul>
          {aboutData.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(item.id)}
                style={{
                  color: activeAboutItem === item.id ? '#9F967C' : '#33312A',
                  borderBottom:
                    activeAboutItem === item.id
                      ? '2px solid #9F967C'
                      : '2px solid #33312A',
                }}
              >
                <span>{item.displayNumber}</span>
                <p>{item.title}</p>
                <MdOutlineKeyboardArrowRight />
              </button>
            </li>
          ))}
        </ul>
      </Nav>

      <Articles>
        <Article
          key={activeArticle?.id}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 1, ease: 'easeInOut' },
            },
          }}
        >
          <div className="image-wrapper">
            <Image
              src="/images/jake-nackos-CUYWM4KoFig-unsplash.jpg"
              alt="-"
              width={1500}
              height={2200}
              quality={100}
              priority
              style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
            />
          </div>
          <div className="text-content">
            <h3>{activeArticle?.title}</h3>
            <p>{activeArticle?.text}</p>
          </div>
        </Article>
      </Articles>
    </StyledSection>
  )
}
