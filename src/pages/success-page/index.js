import { useParams } from 'react-router-dom';

import BronzeBadge from '../../assets/img/mint/whitelist-badge/bronze-badge.png';
import SilverBadge from '../../assets/img/mint/whitelist-badge/silver-badge.png';
import GoldBadge from '../../assets/img/mint/whitelist-badge/gold-badge.png';
import GamingBadge from '../../assets/img/mint/gaming-badge/wonderhero-badge.png';

import './style.scss';

const SuccessPage = () => {
  const { badge } = useParams();

  const BADGE_IMG = {
    bronze: {
      img: BronzeBadge,
    },
    silver: {
      img: SilverBadge,
    },
    gold: {
      img: GoldBadge,
    },
    gaming: {
      img: GamingBadge,
    },
  };

  return (
    <div className="success-page">
      <div className="head">
        <div className="title">
          <p className="black m-0 p-0">THANK YOU FOR</p>
          <p className="yellow m-0 p-0">YOUR PURCHASE</p>
        </div>
        <div className="description d-none d-sm-block">
          <p>You are now a proud member of the RankerDAO gaming guild!</p>
        </div>
      </div>
      <div className="body">
        <img src={BADGE_IMG[badge]?.img || ''} alt="bronze badge" />
      </div>
      <div className="foot">
        <p className="title">PURCHASE SUCCESSFULL</p>
        <p className="verify">Verify your purchase on our discord!</p>
        <div className="verify-button">
          <a
            href="http://discord.gg/rankerdao"
            target="_blank"
            rel="noopener noreferrer">
            VERIFY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
