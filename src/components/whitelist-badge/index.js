import React from 'react';
import ArrowSvg from '../../assets/svg/arrow';
import BronzeBadge from '../../assets/img/mint/whitelist-badge/bronze-badge.png';
import SilverBadge from '../../assets/img/mint/whitelist-badge/silver-badge.png';
import GoldBadge from '../../assets/img/mint/whitelist-badge/gold-badge.png';

export default function WhiteListBadge() {
  const whiteListBadge = [
    {
      id: Math.floor(Math.random() * 1000000),
      url: BronzeBadge,
      title: 'bronze badge',
      description: 'A chance at investment slots on upcoming IGOs.',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      url: SilverBadge,
      title: 'silver badge',
      description: 'Higher chance at investment slots on upcoming IGOs.',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      url: GoldBadge,
      title: 'gold badge',
      description: 'Guaranteed investment slots on upcoming IGOs.',
    },
  ];
  return (
    <div className="my-5 d-flex justify-content-center flex-column">
      <button
        className="mint-badge-btn title-dropdown mb-4 mt-1 bold-white mx-auto d-flex align-items-center justify-content-between w-100"
        style={{ maxWidth: '80%', width: '80%', borderRadius: 0 }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#WHITELISTBADGES"
        aria-expanded="false"
        aria-controls="WHITELISTBADGES">
        <ArrowSvg />
        WHITELIST BADGES
        <ArrowSvg />
      </button>
      <div id="WHITELISTBADGES" className="collapse">
        <div className="mx-auto mx-p">
          <p className="regular-15 d-sm-block text-center">
            Our investment badge allows you to participate and get a chance to
            earn in our upcoming IGOs.
          </p>
          <p className="bold-15 text-blue d-sm-block text-center">
            Be the first to fully experience our new partner games with the best
            price using our investment badges!
          </p>
        </div>

        <div className="row mx-auto row-cols-1 row-cols-lg-3 pb-5 mx-card">
          {whiteListBadge.map(data => (
            <div
              className="col d-flex justify-content-center flex-column px-3 mb-3"
              key={data.id}>
              <div className="d-flex align-items-center justify-content-center w-100">
                <img src={data.url} className="mx-image" />
              </div>
              <p className="mint-sub-title mb-lg-5 mb-2">{data.title}</p>
              <div className="mx-auto mx-multy-image">
                <p className="regular-15 text-center px-2">
                  {data.description}
                </p>
              </div>
              <button className="join-our-guild-btn-blue mt-lg-5 mt-2">
                GET YOUR BADGE
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
