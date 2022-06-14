import React from 'react';
import ArrowSvg from '../../assets/svg/arrow';
import BasicBadgeImg from '../../assets/img/mint/basic-badge/basic-badge.png';

export default function BasicBadge() {
  const basicBadge = {
    url: BasicBadgeImg,
    title: 'Basic badge',
    desciption: 'Basic pass to our exclusive Discord Channel.',
  };
  return (
    <div className="my-5 d-flex justify-content-center flex-column">
      <button
        className="mint-badge-btn title-dropdown mb-4 mt-1 bold-white mx-auto d-flex align-items-center justify-content-between w-100"
        style={{ maxWidth: '80%', width: '80%', borderRadius: 0 }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#BASICBADGE"
        aria-expanded="false"
        aria-controls="BASICBADGE">
        <ArrowSvg />
        BASIC BADGE
        <ArrowSvg />
      </button>
      <div id="BASICBADGE" className="collapse">
        <div className="mx-auto mx-p">
          <p className="regular-15 d-sm-block text-center">
            Join our family and get updated on the latest news on <br />
            our guild.
          </p>
          <p className="bold-15 text-blue d-sm-block text-center">
            Basic badge allows you to join our community and get you <br />
            the updated on the latest buzz on P2E gaming!
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-column mx-card">
          <div className="d-flex align-items-center justify-content-center">
            <img src={basicBadge.url} className="mx-image" />
          </div>
          <p className="mint-sub-title mb-lg-5 mb-2">{basicBadge.title}</p>
          <div className="mx-auto mx-single-image">
            <p className="regular-15 text-center px-5">
              {basicBadge.desciption}
            </p>
          </div>

          <button className="join-our-guild-btn-blue mt-lg-5 mt-2">
            GET YOUR BADGE
          </button>
        </div>
      </div>
    </div>
  );
}
