'use client'

import { createGlobalStyle } from 'styled-components'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})

const Globals = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-family:  ${inter.style.fontFamily}, sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`

export default Globals
