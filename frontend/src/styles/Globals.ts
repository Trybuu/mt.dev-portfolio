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
        color: #33312A;
    }

    body{
        background-color: #E0DED8;
    }

    a{
        color: #131311;
        text-decoration: none;
    }

    button{
        font-family:  ${inter.style.fontFamily}, sans-serif;
    }
`

export default Globals
