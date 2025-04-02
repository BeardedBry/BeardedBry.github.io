import { Space_Grotesk, Special_Elite } from 'next/font/google'

const special_elite = Special_Elite({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-special-elite',
  weight: '400',
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export { special_elite, space_grotesk }
