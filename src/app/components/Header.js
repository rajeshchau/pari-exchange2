'use client';

import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'
import { ConnectButton } from 'thirdweb/react'
import { client } from "../client"

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItems: `relative mr-1 cursor-pointer hover:opacity-60`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924] ml-6`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
};

const Header = () => {
  const handleNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.header}>
      <Image
        src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        alt='logo'
        width={200}
        height={200}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItems} onClick={() => handleNavigation('https://example.com/cryptocurrencies')}>
            <div className={styles.navLink}>
              Cryptocurrencies
              <div className={styles.badge}/>
            </div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://app.uniswap.org/')}>
            <div className={styles.navLink}>Exchanges</div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://opensea.io/')}>
            <div className={styles.navLink}>
              NFTS
              <div className={styles.badge}/>
            </div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://drip.haus/')}>
            <div className={styles.navLink}>
              Cryptown
              <div className={styles.badge}/>
            </div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://portfolio.metamask.io/?metamaskEntry=ext_portfolio_button&metametricsId=0x9d348d942a357b780bea2a4161ec0ec154ab2898237818a86411dcec9063c8a4&metricsEnabled=true&marketingEnabled=true')}>
            <div className={styles.navLink}>Portfolio</div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://coinmarketcap.com/watchlist/')}>
            <div className={styles.navLink}>Watchlist</div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://sunflower-land.com/')}>
            <div className={styles.navLink}>
              Products
              <div className={styles.badge}/>
            </div>
          </div>

          <div className={styles.navItems} onClick={() => handleNavigation('https://updraft.cyfrin.io/courses/blockchain-basics')}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>
        <div className='flex items-center'>
          <div className={styles.inputContainer}>
            <Search/>
            <input className={styles.input} placeholder='Search'/>
          </div>
          <div className='ml-16'>
          <ConnectButton client={client} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm ml-8">
            Connect
          </ConnectButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header