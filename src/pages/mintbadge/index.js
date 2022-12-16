import { useEffect, useState } from 'react';

import { useWalletContext } from 'contexts/WalletContext';
import { useMintContext } from 'contexts/MintContext';
import { TextSwitch } from 'utils/TextSwitch';

import InitBadge from '../../assets/img/mint/hero.png';
import WhiteListBadge from '../../assets/img/mint/whitelist-badge/whitelist-badge.png';
import BronzeBadge from '../../assets/img/mint/whitelist-badge/bronze-badge.png';
import SilverBadge from '../../assets/img/mint/whitelist-badge/silver-badge.png';
import GoldBadge from '../../assets/img/mint/whitelist-badge/gold-badge.png';
import GamingBadge from '../../assets/img/mint/gaming-badge/wonderhero-badge.png';
import './style.scss';
import { PdToast } from 'components/toast';
import { useNavigate } from 'react-router-dom';

const BADGE_DATA = {
  init: {
    title: 'BE A PART OF OUR ',
    titleSpecial: 'FAMILY',
    description:
      'You can enjoy our inventory of NFTs and other boons with yout RANKER Badge. Exclusive NFTs, Tournaments, coaching sessions and beyond.',
    img: InitBadge,
    imgCaption: 'Our badge collections!',
  },
  whitelist: {
    title: 'WHITELIST BADGE',
    description:
      'Our investment badge allows you to participate and get a chance to earn in our upcoming IGOs.',
    descriptionBold:
      'Be the first to fully experience our new partner games with the best price using our investment badges!',
    img: WhiteListBadge,
    imgCaption: 'Our whitelist badges!',
  },
  bronze: {
    title: 'BRONZE BADGE',
    description: 'A chance at investment slots on upcoming IGOs.',
    price: '20.000',
    limited: false,
    img: BronzeBadge,
    imgCaption: 'Bronze investment badge',
    disabled: true,
  },
  silver: {
    title: 'SILVER BADGE',
    description: 'Higher chance at investment slots on upcoming IGOs.',
    price: '100.000',
    limited: false,
    img: SilverBadge,
    imgCaption: 'Silver investment badge',
    disabled: true,
  },
  gold: {
    title: 'GOLD BADGE',
    description: 'investment slots on upcoming IGOs.',
    descriptionEm: 'Guaranteed ',
    price: '500.000',
    limited: true,
    limitTo: 25,
    img: GoldBadge,
    imgCaption: 'Gold investment badge',
    disabled: true,
  },
  gaming: {
    title: 'GAMING BADGE',
    description:
      'With the gaming badge you will be notified of the hottest new games available for scholarships ! Start earning by playing a collection of the latest blockchain games.',
    price: '1500',
    limited: true,
    limitTo: 1000,
    img: GamingBadge,
    imgCaption: 'Gaming badge',
    disabled: false,
  },
};
const MAIN_NAV = [
  { title: 'WHITELIST BADGE', nav: 'whitelist' },
  { title: 'GAMING BADGE', nav: 'gaming' },
];
const BADGE_NAV = [
  { title: 'BRONZE BADGE', nav: 'bronze' },
  { title: 'SILVER BADGE', nav: 'silver' },
  { title: 'GOLD BADGE', nav: 'gold' },
  { title: 'GAMING BADGE', nav: 'gaming' },
];

const MintBadge = () => {
  const navigate = useNavigate();

  const { onConnect = () => {}, address = '', isConnect } = useWalletContext();
  const { mintTask, goldSupply } = useMintContext();

  const [activeBadge, setActiveBadge] = useState('init');
  const [fadeTextClass, setFadeTextClass] = useState('animate__fadeInLeft');
  const [fadeImageClass, setFadeImageClass] = useState('animate__fadeIn');

  const onChangeNavigation = badgeName => {
    setFadeImageClass('animate__fadeOut');
    setFadeTextClass('animate__fadeOut');

    setTimeout(() => {
      setActiveBadge(badgeName);
      setFadeImageClass('animate__fadeIn');
      setFadeTextClass('animate__fadeInLeft');
    }, 300);
  };

  const RenderNav = () => {
    const navList = BADGE_NAV.filter(({ nav }) => {
      return nav !== activeBadge;
    });
    return navList.map(({ title, nav }) => {
      return (
        <div key={title} onClick={() => onChangeNavigation(nav)}>
          <p className="name">{title}</p>
          <p className="plus">+</p>
        </div>
      );
    });
  };

  const handleMintBadge = () => {
    if (!isConnect) {
      return onConnect()
        .then(response => console.log('response: ', response))
        .catch(err => console.log('err', err));
    } else {
      mintTask.execute({
        type: activeBadge,
        address,
        amount: 1,
      });
    }
  };

  useEffect(() => {
    const triggeredWhenSuccess = () => {
      if (mintTask.isSuccess) {
        setTimeout(() => {
          navigate(`/mint-badge/success/${activeBadge}`);
        }, 500);
      }
    };
    triggeredWhenSuccess();
  }, [mintTask, activeBadge, navigate]);

  return (
    <div className="mint-badge">
      <PdToast isOpen={mintTask.error} message={mintTask.errorMessage} />
      <div className={`left animate__animated ${fadeTextClass}`}>
        <h1 className="title">
          {BADGE_DATA[activeBadge].title}
          {BADGE_DATA[activeBadge].titleSpecial && (
            <span> {BADGE_DATA[activeBadge].titleSpecial}</span>
          )}
        </h1>

        <div className="description">
          <p className="description-normal">
            {BADGE_DATA[activeBadge].descriptionEm && (
              <em>
                <strong>{BADGE_DATA[activeBadge].descriptionEm}</strong>
              </em>
            )}{' '}
            {BADGE_DATA[activeBadge].description}
          </p>

          {BADGE_DATA[activeBadge].descriptionBold && (
            <p className="description-bold">
              {BADGE_DATA[activeBadge].descriptionBold}
            </p>
          )}
        </div>

        {BADGE_DATA[activeBadge].price && (
          <div className="price m-0 p-0 mt-3">
            <p className="m-0 p-0">{BADGE_DATA[activeBadge].price} $RANKER</p>
          </div>
        )}

        {activeBadge !== 'init' && activeBadge !== 'whitelist' && (
          <div className="supply">
            {BADGE_DATA[activeBadge].limited ? (
              <p className="m-0 p-0">
                (LIMITED TO {BADGE_DATA[activeBadge].limitTo} BADGE)
              </p>
            ) : (
              <p className="m-0 p-0">(UNLIMITED SUPPLY)</p>
            )}
          </div>
        )}
        {activeBadge !== 'init' && activeBadge !== 'whitelist' && (
          <button
            disabled={BADGE_DATA[activeBadge].disabled}
            className={`${
              BADGE_DATA[activeBadge].disabled
                ? 'connect-button-disabled mt-4'
                : 'connect-button mt-4'
            }`}
            onClick={
              activeBadge === 'gold' && goldSupply > 24 ? null : handleMintBadge
            }>
            <TextSwitch
              isLoading={mintTask.loading}
              isError={mintTask.error}
              successText="CONNECTED"
              initText={
                activeBadge === 'gold' && goldSupply > 24
                  ? 'OUT OF STOCK'
                  : 'MINT YOURS NOW'
              }
              errorText="MINT YOURS NOW"
            />
          </button>
        )}

        <div className="nav mt-5">
          {activeBadge === 'init' &&
            MAIN_NAV.map(({ title, nav }) => {
              return (
                <div key={title} onClick={() => onChangeNavigation(nav)}>
                  <p className="name">{title}</p>
                  <p className="plus">+</p>
                </div>
              );
            })}

          {activeBadge === 'whitelist' &&
            BADGE_NAV.map(({ title, nav }) => {
              return (
                <div key={title} onClick={() => onChangeNavigation(nav)}>
                  <p className="name">{title}</p>
                  <p className="plus">+</p>
                </div>
              );
            })}

          {activeBadge !== 'init' && activeBadge !== 'whitelist' && (
            <RenderNav />
          )}
        </div>
      </div>

      <div className={`right animate__animated ${fadeImageClass}`}>
        <div className="hero-wrapper">
          <img src={BADGE_DATA[activeBadge].img} alt="badge" />
          <em>{BADGE_DATA[activeBadge].imgCaption}</em>
        </div>
      </div>
    </div>
  );
};

export default MintBadge;
