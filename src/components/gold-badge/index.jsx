import React, { useState } from 'react'
import './style.scss'
import goldBadge from '../../assets/img/mint/whitelist-badge/gold-badge.png'
import BronzeBadge from '../bronze-badge'
import SilverBadge from '../silver-badge'
import GamingBadges from '../gaming-badges'

const GoldBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'gold' })
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeIn')

  const handleChange = (name) => {
    setTimeout(() => {
      setIsActive({ name })
    }, 1500)
    setClassFadeOut('animate__fadeOut')
  }

  return (
    <>
      {isActive.name === 'gold' && <div className={`container-hero my-5 animate__animated animate__slow ${classFadeOut}`}>
        <div className="content-wrapper">
          <div className="column-left-gold">
            <h1 className='font-hero-gold'>GOLD <br /> BADGE</h1>
            <p className='subtext-1-gold'><strong>Guaranteed</strong> investment slots on upcoming IGOs.</p>
            <p className='subtext-2-gold'>500.000 $ranker<br /><span>(LIMITED TO 25 BADGE)</span></p>
            <button className='button-gold'>MINT YOURS NOW</button>
            <div className='badges-gold d-flex align-items-center justify-content-between'>
              <h3>BRONZE BADGE</h3>
              <span className='plus' onClick={() => handleChange('bronze')}>+</span>
            </div>
            <div className='badges-gold d-flex align-items-center justify-content-between'>
              <h3>SILVER BADGE</h3>
              <span className='plus' onClick={() => handleChange('silver')}>+</span>
            </div>
            <div className='badges-gold d-flex align-items-center justify-content-between'>
              <h3>GAMING BADGES</h3>
              <span className='plus' onClick={() => handleChange('gaming')}>+</span>
            </div>
          </div>
          <div className="column-right-gold">
            <img
              src={goldBadge}
              className="img-fluid gold-badge-shield-img"
              alt="hero illustration"
            />
            <p className='text-gold'>gold investment badge</p>
          </div>
        </div>
      </div>}
      {isActive.name === 'bronze' && <BronzeBadge />}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  )
}

export default GoldBadge