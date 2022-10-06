import React, { useState } from 'react';
import gamingBadge from '../../assets/img/mint/gaming-badge/wonderhero-badge.png';
import SilverBadge from '../silver-badge';
import GoldBadge from '../gold-badge';
import BronzeBadge from '../bronze-badge';
import './style.scss';
import { useWalletContext } from 'contexts/WalletContext';
import { useMintContext } from 'contexts/MintContext';
import { TextSwitch } from 'utils/TextSwitch';

const GamingBadges = () => {
  const [isActive, setIsActive] = useState({ name: 'gaming' });
  const [classFadeOut, setClassFadeOut] = useState('animate__fadeInLeft');
  const [imageFadeOut, setImageFadeOut] = useState('animate__fadeIn');

  const { onConnect, address, isConnect, isLoading, isError } =
    useWalletContext();
  const { mintTask } = useMintContext();

  const handleChange = name => {
    setTimeout(() => {
      setIsActive({ name });
    }, 1500);
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
      {isActive.name === 'gaming' && (
        <div className={`container-hero height-hero-gaming`}>
          <div className="content-wrapper my-4">
            <div
              className={`column-left-gaming animate__animated ${classFadeOut}`}>
              <h1 className="font-hero-gaming">
                GAMING <br /> BADGE
              </h1>
              <p className="subtext-1-gaming">
                With the gaming badge you will be notified of the hottest new
                games available for scholarships ! Start earning by playing a
                collection of the latest blockchain games.
              </p>
              <p className="subtext-2-gaming">
                500.000 $ranker
                <br />
                <span>(UNLIMITED BADGE)</span>
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

              {address && (
                <p className="subtext-2-bronze">address: {address}</p>
              )}
              <div className="badges-gaming d-flex align-items-center justify-content-between">
                <h3>BRONZE BADGE</h3>
                <span className="plus" onClick={() => handleChange('bronze')}>
                  +
                </span>
              </div>
              <div className="badges-gaming d-flex align-items-center justify-content-between">
                <h3>SILVER BADGE</h3>
                <span className="plus" onClick={() => handleChange('silver')}>
                  +
                </span>
              </div>
              <div className="badges-gaming d-flex align-items-center justify-content-between">
                <h3>GOLD BADGE</h3>
                <span className="plus" onClick={() => handleChange('gold')}>
                  +
                </span>
              </div>
            </div>
            <div
              className={`column-right-gaming animate__animated ${imageFadeOut}`}>
              <img
                src={gamingBadge}
                className="img-fluid gaming-badge-shield-img"
                alt="hero illustration"
              />
              <p className="text-gaming">Gaming badge</p>
            </div>
          </div>
        </div>
      )}
      {isActive.name === 'bronze' && <BronzeBadge />}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gold' && <GoldBadge />}
    </>
  );
};

export default GamingBadges;
