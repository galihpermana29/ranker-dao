import React, { useState } from 'react';
import { useWalletContext } from 'contexts/WalletContext';

import { TextSwitch } from 'utils/TextSwitch';
import bronzeBadge from '../../assets/img/mint/whitelist-badge/bronze-badge.png';
import SilverBadge from '../silver-badge';
import GoldBadge from '../gold-badge';
import GamingBadges from '../gaming-badges';
import './style.scss';
import { useMintContext } from 'contexts/MintContext';

const BronzeBadge = () => {
  const [isActive, setIsActive] = useState({ name: 'bronze' });
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

  const onClickMintBronze = () => {
    return mintTask.execute({ type: 'bronze', address, amount: 1 });
  };

  const onClickConnect = () => {
    onConnect()
      .then(response => console.log('response', response))
      .catch(error => console.log('error: ', error));
  };

  return (
    <>
      {isActive.name === 'bronze' && (
        <div className={`container-hero height-hero-bronze`}>
          <div className="content-wrapper mb-4">
            <div
              className={`column-left-bronze animate__animated ${classFadeOut}`}>
              <h1 className="font-hero-bronze">
                BRONZE <br /> BADGE
              </h1>
              <p className="subtext-1-bronze">
                A chance at investment slots on upcoming IGOs.
              </p>
              <p className="subtext-2-bronze">
                20.000 $ranker
                <br />
                <span>(UNLIMITED SUPPLY)</span>
              </p>

              {isConnect ? (
                <button className="button-bronze" onClick={onClickMintBronze}>
                  MINT YOURS NOW
                </button>
              ) : (
                <button className="button-bronze" onClick={onClickConnect}>
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

              <div className="badges-bronze d-flex align-items-center justify-content-between">
                <h3>SILVER BADGE</h3>
                <span className="plus" onClick={() => handleChange('silver')}>
                  +
                </span>
              </div>
              <div className="badges-bronze d-flex align-items-center justify-content-between">
                <h3>GOLD BADGE</h3>
                <span className="plus" onClick={() => handleChange('gold')}>
                  +
                </span>
              </div>
              <div className="badges-bronze d-flex align-items-center justify-content-between">
                <h3>GAMING BADGES</h3>
                <span className="plus" onClick={() => handleChange('gaming')}>
                  +
                </span>
              </div>
            </div>
            <div
              className={`column-right-bronze animate__animated ${imageFadeOut}`}>
              <img
                src={bronzeBadge}
                className="img-fluid bronze-badge-shield-img"
                alt="hero illustration"
              />
              <p className="text-bronze">Bronze investment badge</p>
            </div>
          </div>
        </div>
      )}
      {isActive.name === 'silver' && <SilverBadge />}
      {isActive.name === 'gold' && <GoldBadge />}
      {isActive.name === 'gaming' && <GamingBadges />}
    </>
  );
};

export default BronzeBadge;
