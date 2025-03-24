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
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 1024px) {
    position: absolute;
    flex-direction: row;
    align-items: center;
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

interface AboutData {
  id: number
  displayNumber: string
  title: string
  text: string
  imageSrc: string
  imageAlt: string
}

const aboutData: AboutData[] = [
  {
    id: 0,
    displayNumber: '01',
    title: 'Kim jestem',
    text: 'Jestem frontend developerem z pasją do tworzenia nowoczesnych, responsywnych i intuicyjnych interfejsów użytkownika. Specjalizuję się w React, TypeScript i CSS-in-JS. Dbam o responsywność, optymalizację i dostępność stron i aplikacji. ',
    imageSrc: '/images/gian-porsius-GqDTtkiMZEw-unsplash.jpg',
    imageAlt:
      'Człowiek idący górzystą ścieżką - Photo by Gian Porsius on Unsplash',
  },
  {
    id: 1,
    displayNumber: '02',
    title: 'Poza kodem',
    text: 'Poza programowaniem jestem osobą otwartą na nowe doświadczenia i wyzwania. Wolny czas lubię spędzać aktywnie - na siłowni, rowerze czy rolkach. Cenię czas spędzany z najbliższymi, nie odmówię wieczoru z ciekawą planszówką.',
    imageSrc: '/images/paul-green-gOHfFgwyDNM-unsplash.jpg',
    imageAlt:
      'Człowiek zjeżdzający na rowerze - Photo by Paul Green on Unsplash',
  },
  {
    id: 2,
    displayNumber: '03',
    title: 'Nieustanny rozwój',
    text: 'Świat technologii zmienia się błyskawicznie, więc staram się nieustannie poszerzać swoją wiedzę. Zawsze mam zaplanowane kolejne etapy nauki, aby rozwijać się świadomie i skutecznie.',
    imageSrc: '/images/gery-wibowo-Eti6ph51H4A-unsplash.jpg',
    imageAlt: 'Laptop i książka - Photo by Gery Wibowo on Unsplash',
  },
  {
    id: 3,
    displayNumber: '04',
    title: 'Stack technologiczny',
    text: 'Na co dzień pracuję z technologiami takimi jak TypeScript, JavaScript, React, Redux, React Router, React Hook Form, Axios, HTML, CSS i SCSS. Tworzę nowoczesne, wydajne i intuicyjne aplikacje, dbając o ich responsywność oraz dostępność. Nieustannie dążę do poszerzania swoich umiejętności. Obecnie koncentruję się na nauce Vue.js i React Native, aby lepiej zrozumieć ekosystem frontendu. Dodatkowo zamierzam zgłębić backendowe technologie, takie jak Express, GraphQL, Redis i PostgreSQL, a także rozwiązania chmurowe, w tym AWS. Moim celem jest rozwój w kierunku bardziej wszechstronnego full-stack developera.',
    imageSrc: '/images/deniz-altindas-t1XLQvDqt_4-unsplash.jpg',
    imageAlt:
      'Stos ułożonych na sobie kamieni - Photo by Deniz Altindas on Unsplash',
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
    <StyledSection id="about-section">
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
            {activeArticle &&
            activeArticle.imageSrc &&
            activeArticle.imageAlt ? (
              <Image
                src={activeArticle.imageSrc}
                alt={activeArticle.imageAlt}
                width={1500}
                height={2200}
                quality={100}
                priority
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
              />
            ) : null}
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
