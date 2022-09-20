import { useState } from 'react';

import RankerCoinImg from 'assets/img/shop/ranker-coin.png';

import MetaGearImg from 'assets/img/shop/metagear.png';
import MetaGear1 from 'assets/img/shop/metagear-1.png';
import MetaGear2 from 'assets/img/shop/metagear-2.png';
import MetaGear3 from 'assets/img/shop/metagear-3.png';
import MetaGear4 from 'assets/img/shop/metagear-4.png';

import ApeironImg from 'assets/img/shop/apeiron.png';
import Apeiron1 from 'assets/img/shop/apeiron-1.png';
import Apeiron2 from 'assets/img/shop/apeiron-2.png';
import Apeiron3 from 'assets/img/shop/apeiron-3.png';
import Apeiron4 from 'assets/img/shop/apeiron-4.png';

import './style.scss';
import { ShopSelector } from './ShopSelector';

const SHOP_GAME_LIST = {
  apeiron: {
    name: 'apeiron',
    label: 'APEIRON',
    img: ApeironImg,
    description:
      "Apeiron is the world's first ever god-game on the blockchain. Come uncover the mysteries of the Godiverse! Step into your role as a Wandering God and build up planets, explore celestial dungeons, and battle the forces of Chaos!",
    imageList: [
      { img: Apeiron1, title: 'FOONIE EMBLEMS', price: 0.0005 },
      { img: Apeiron2, title: 'DOOD PLUSHIE', price: 0.0005 },
      {
        img: Apeiron3,
        title: 'ORIGINS GUARDIANS APOSTLE MINT TICKET',
        price: 0.0005,
      },
      { img: Apeiron4, title: 'FOONIE EMBLEMS', price: 0.0005 },
    ],
  },
  metagear: {
    name: 'metagear',
    label: 'METAGEAR',
    img: MetaGearImg,
    description:
      'MetaGear is a game that shows creativity in assembling robots to fight. You can visit other players’ garages, decorate and protect their garages by the surprise attack from other players!',
    imageList: [
      { img: MetaGear1, title: 'BRAKE DISC', price: 0.0005 },
      { img: MetaGear2, title: 'BRAKE DISC 2', price: 0.0005 },
      {
        img: MetaGear3,
        title: 'HEADLAMP',
        price: 0.0005,
      },
      { img: MetaGear4, title: 'ARMORED HEADLAMP', price: 0.0005 },
    ],
  },
};

const Shop = () => {
  const [activeGame, setActiveGame] = useState('apeiron');
  const [isHovered, setIsHovered] = useState({});

  const onMouseEnterPrice = shop => {
    setIsHovered(shop);
  };

  const onMouseLeavePrice = () => {
    setIsHovered({});
  };

  console.log('isHovered: ', isHovered);

  return (
    <div className="shop-container">
      <div className="shop-title mt-5">
        <div className="my-5">
          <p className="shop-title-black d-block d-sm-none">STARTED ON</p>
          <p className="shop-title-black d-none d-sm-block">
            LETS GET YOU STARTED ON
          </p>

          <p className="shop-title-yellow">ON YOUR JOURNEY</p>
        </div>
        <p className="shop-title-sub d-none d-md-block mb-5">
          We have the tools that you need to enhanche your experience on the
          metaverse!
        </p>
      </div>

      <div className="shop-wrapper d-flex flex-column flex-sm-row align-items-start">
        <div className="shop-left-side d-flex flex-column align-items-center justify-content-center">
          <img
            src={SHOP_GAME_LIST[activeGame].img}
            alt="apeiron"
            className="shop-logo w-100"
          />
          <p className="description">
            {SHOP_GAME_LIST[activeGame].description}
          </p>
          <ShopSelector
            activeGame={activeGame}
            setActiveGame={setActiveGame}
            list={SHOP_GAME_LIST}
          />
        </div>
        <div className="shop-list row">
          {SHOP_GAME_LIST[activeGame].imageList.map((shop, index) => {
            const { img, title = '', price = 0 } = shop;
            return (
              <div key={index} className="col-6 col-md-4 my-3">
                <img src={img} className="shop-list-img w-100" alt="ape iron" />
                <p className="title p-0 m-0 mt-2">{title}</p>
                <p className="title p-0 m-0 mt-2">Price</p>
                <div
                  className="d-flex flex-row align-items-center"
                  onMouseLeave={onMouseLeavePrice}
                  onMouseEnter={() => onMouseEnterPrice(shop)}>
                  {isHovered.title === title ? (
                    <p>Buy Now</p>
                  ) : (
                    <>
                      <img
                        src={RankerCoinImg}
                        alt="ranker coin"
                        className="ranker-coin-img"
                      />
                      <p className="m-0 p-0 ms-2 price">{price}</p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
