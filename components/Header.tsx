import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from './Link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { Special_Elite } from 'next/font/google'

const special_elite = Special_Elite({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-special-elite',
  weight: '400',
})

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white-400 dark:bg-gray-900 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3 text-gray-500 dark:text-white-400">
            <Image src={Logo} alt="Logo" className="w-20 h-20" />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className={`hidden h-6 text-2xl font-semibold sm:block ${special_elite.className}`}>
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-white-400"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <SearchButton />
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
