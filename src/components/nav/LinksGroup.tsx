'use client'

import Link from 'next/link'
import styled from 'styled-components'
const Group = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  padding: 1rem;
  border: 1px solid black;
`

export function LinksGroup() {
  return (
    <Group>
      <Link href="/blog">Blog</Link>
      <a href="/documents/cv.pdf" target="_blank">
        Resume
      </a>
    </Group>
  )
}
