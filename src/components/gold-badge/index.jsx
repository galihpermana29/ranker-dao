import React, { useState } from 'react';
import goldBadge from '../../assets/img/mint/whitelist-badge/gold-badge.png';
import BronzeBadge from '../bronze-badge';
import SilverBadge from '../silver-badge';
import GamingBadges from '../gaming-badges';
import './style.scss';
import { useWalletContext } from 'contexts/WalletContext';
import { useMintContext } from 'contexts/MintContext';
import { TextSwitch } from 'utils/TextSwitch';

const GoldBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'gold' });
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeInLeft');
  const [imageFadeOut, setImageFadeOut] = useState('animate__fadeIn');

  const { onConnect, address, isConnect, isLoading, isError } =
    useWalletContext();
  const { mintTask } = useMintContext();

  const handleChange = name => {
    setTimeout(() => {
      setIsActive({ name });
    }, 300);
    setClassFadeOut('animate__fadeOut');
    setImageFadeOut('animate__fadeOut');
  };

  const onClickMintGold = () => {
    return mintTask.execute({ type: 'gold', address, amount: 1 });
  };

  const onClickConnect = () => {
    onConnect()
      .then(response => console.log('response', response))
      .catch(error => console.log('error: ', error));
  };

  return (
    <>
      {isActive.name === 'gold' && (
        <div className={`container-hero height-hero-gold`}>
          <div className="content-wrapper my-4">
            <div
              className={`column-left-gold animate__animated ${classFadeOut}`}>
              <h1 className="font-hero-gold">
                GOLD <br /> BADGE
              </h1>
              <p className="subtext-1-gold">
                <strong>Guaranteed</strong> investment slots on upcoming IGOs.
              </p>
              <p className="subtext-2-gold">
                500.000 $ranker
                <br />
                <span>(LIMITED TO 25 BADGE)</span>
              </p>
              {isConnect ? (
                <button className="button-gold" onClick={onClickMintGold}>
                  MINT YOURS NOW
                </button>
              ) : (
                <button className="button-gold" onClick={onClickConnect}>
                  <TextSwitch
                    isLoading={isLoading}
                    isError={isError}
                    isSuccess={isConnect}
                    successText="CONNECTED"
                    initText="CONNECT"
                    errorText="ERROR"
                  />
                </button>
              )}
              <div className="badges-gold d-flex align-items-center justify-content-between">
                <h3>BRONZE BADGE</h3>
                <span className="plus" onClick={() => handleChange('bronze')}>
                  +
                </span>
              </div>
              <div className="badges-gold d-flex align-items-center justify-content-between">
                <h3>SILVER BADGE</h3>
                <span className="plus" onClick={() => handleChange('silver')}>
                  +
                </span>
              </div>
              <div className="badges-gold d-flex align-items-center justify-content-between">
                <h3>GAMING BADGES</h3>
                <span className="plus" onClick={() => handleChange('gaming')}>
                  +
                </span>
              </div>
            </div>
            <div
              className={`column-right-gold animate__animated ${imageFadeOut}`}>
              <img
                src={goldBadge}
                className="img-fluid gold-badge-shield-img"
                alt="hero illustration"
              />
              <p className="text-gold">gold investment badge</p>
            </div>
          </div>
        </div>
      )}
      {isActive.name === 'bronze' && <BronzeBadge />}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  );
};

export default GoldBadge;
