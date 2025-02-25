'use client'

import { createGlobalStyle } from 'styled-components'
import { IBM_Plex_Mono, Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
  display: 'swap',
})

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
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
        color: #131311;
    }

    body{
        min-height: 400vh;
        /* background-color: #E5E5E0; */
        background-color: #E0DED8;
    }

    a{
        color: #131311;
        text-decoration: none;
    }
`

export default Globals
