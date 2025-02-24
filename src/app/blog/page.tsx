'use client'

import { BlogNav } from '@/components/nav/BlogNav'
import { theme } from '@/styles/Theme'
import { ThemeProvider } from 'styled-components'

export default function BlogHome() {
  return (
    <ThemeProvider theme={theme}>
      <BlogNav />
    </ThemeProvider>
  )
}
