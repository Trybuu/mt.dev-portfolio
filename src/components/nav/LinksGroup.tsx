'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  padding: 0.5rem 1.25rem;
  border: 1px solid #706c61;
  transition: background-color 0.2s ease-in-out;
  color: #706c61;

  a {
    color: #706c61;
  }
`

const Line = styled.div`
  height: 1rem;
  width: 1px;
  background-color: #706c61;
`

export function LinksGroup() {
  return (
    <Group>
      <Link href="/blog">Blog</Link>
      <Line />
      <a href="/documents/cv.pdf" target="_blank">
        Resume
      </a>
    </Group>
  )
}
