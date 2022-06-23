import React from 'react';
import ArrowSvg from '../../assets/svg/arrow';
import WanderHeroBadge from '../../assets/img/mint/gaming-badge/wonderhero-badge.png';

export default function GamingBadge() {
  const gamingBadge = {
    url: WanderHeroBadge,
    title: 'gaming badge',
    desciption:
      'With the gaming badge you will be notified of the hottest new games available for scholarships ! Start earning by playing a collection of the latest blockchain games.',
    price: '500 $ranker',
    limit: '(NO LIMIT)',
  };
  return (
    <div className="my-5 d-flex justify-content-center flex-column">
      <button
        className="mint-badge-btn title-dropdown mb-4 mt-1 bold-white mx-auto d-flex align-items-center justify-content-between w-100"
        style={{ maxWidth: '80%', width: '80%', borderRadius: 0 }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#GAMINGBADGE"
        aria-expanded="false"
        aria-controls="GAMINGBADGE">
        <ArrowSvg />
        GAMING BADGE
        <ArrowSvg />
      </button>
      <div id="GAMINGBADGE" className="collapse">
        <div className="mx-auto mx-p">
          <p className="regular-15 d-sm-block text-center">
            Join our community of gamers and start your P2E Adventure Now!
          </p>
          <p className="bold-15 text-blue d-sm-block text-center">
            With the gaming badge you can apply for scholarships, eligible for
            giveaways and may request new games to be added to our collection!
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column mx-card">
          <div className="d-flex align-items-center justify-content-center">
            <img src={gamingBadge.url} className="mx-image" />
          </div>
          <p className="mint-sub-title mb-lg-4 mb-2">{gamingBadge.title}</p>
          <div className="mx-auto mx-single-image mb-lg-4 mb-2">
            <p className="regular-15 text-center px-2">
              {gamingBadge.desciption}
            </p>
          </div>

          <div className="mx-auto d-flex align-items-center justify-content-center flex-column">
            <p className="mint-price mb-1">{gamingBadge.price}</p>
            <p className="mint-limit">{gamingBadge.limit}</p>
            <button className="join-our-guild-btn-blue mt-2">
              GET YOUR BADGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
