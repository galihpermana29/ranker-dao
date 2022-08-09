import React, { useState } from 'react'
import './style.scss'
import bronzeBadge from '../../assets/img/mint/whitelist-badge/bronze-badge.png'
import SilverBadge from '../silver-badge'
import GoldBadge from '../gold-badge'
import GamingBadges from '../gaming-badges'

const BronzeBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'bronze' })
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeIn')

  const handleChange = (name) => {
    setTimeout(() => {
      setIsActive({ name })
    }, 900)
    setClassFadeOut('animate__fadeOut')
  }

  return (
    <>
      {isActive.name === 'bronze' && <div className={`container-hero height-hero-bronze animate__animated animate__slow ${classFadeOut}`}>
        <div className="content-wrapper my-4">
          <div className="column-left-bronze">
            <h1 className='font-hero-bronze'>BRONZE <br /> BADGE</h1>
            <p className='subtext-1-bronze'>A chance at investment slots on upcoming IGOs.</p>
            <p className='subtext-2-bronze'>20.000 $ranker<br /><span>(UNLIMITED SUPPLY)</span></p>
            <button className='button-bronze'>MINT YOURS NOW</button>
            <div className='badges-bronze d-flex align-items-center justify-content-between'>
              <h3>SILVER BADGE</h3>
              <span className='plus' onClick={() => handleChange('silver')}>+</span>
            </div>
            <div className='badges-bronze d-flex align-items-center justify-content-between'>
              <h3>GOLD BADGE</h3>
              <span className='plus' onClick={() => handleChange('gold')}>+</span>
            </div>
            <div className='badges-bronze d-flex align-items-center justify-content-between'>
              <h3>GAMING BADGES</h3>
              <span className='plus' onClick={() => handleChange('gaming')}>+</span>
            </div>
          </div>
          <div className="column-right-bronze">
            <img
              src={bronzeBadge}
              className="img-fluid bronze-badge-shield-img"
              alt="hero illustration"
            />
            <p className='text-bronze'>Bronze investment badge</p>
          </div>
        </div>
      </div>}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gold' && <GoldBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  )
}

export default BronzeBadge