'use client'

import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import { plexMono } from '@/styles/Globals'
import Link from 'next/link'
import { GrDownload } from 'react-icons/gr'
import { MdArrowOutward } from 'react-icons/md'
import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  padding: 0.5rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  a {
    display: flex;
    gap: 1rem;
    font-family: ${plexMono.style.fontFamily};
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Line = styled.div`
  height: 1rem;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export function LinksGroup() {
  const dimensions = useWindowDimensions()

  if (dimensions.width < 1024) return null

  return (
    <Group>
      <Link href="/blog">
        <span>Blog</span> <MdArrowOutward />
      </Link>
      <Line />
      <a href="/documents/cv.pdf" target="_blank">
        <span>Życiorys</span>
        <GrDownload />
      </a>
    </Group>
  )
}
