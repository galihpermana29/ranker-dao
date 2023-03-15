import { useEffect, useState } from 'react';

// import { ShopSelector } from './ShopSelector';

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
import { Link, useParams } from 'react-router-dom';
import { DUMMY_DATA } from './constant';

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

const DetailShop = () => {
  const [activeGame, setActiveGame] = useState('apeiron');
  const [isHovered, setIsHovered] = useState({});
  const { id } = useParams();
  const [data, setData] = useState({});

  const onMouseEnterPrice = shop => {
    setIsHovered(shop);
  };

  const onMouseLeavePrice = () => {
    setIsHovered({});
  };

  useEffect(() => {
    let filtered = DUMMY_DATA.filter(datas => datas.id === parseInt(id));
    console.log(filtered, 'filterd');
    setData(filtered[0]);
  }, [id]);

  return (
    <div className="shop-container">
      <div className="shop-title mt-5">
        <div className="my-4">
          <p className="shop-title-black d-block d-sm-none m-0 p-0">
            STARTED ON
          </p>
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
          <div className="shop-logo-wrapper">
            <img src={data.logo} alt="apeiron" />
          </div>
          <p className="shop-name align-self-start">{data.title}</p>
          <p className="description">{data.desc}</p>

          <div className="w-full align-self-start">
            <Link className="button">BROWSE OTHER GAMES</Link>
          </div>

          {/* <ShopSelector
            activeGame={activeGame}
            setActiveGame={setActiveGame}
            list={SHOP_GAME_LIST}
          /> */}
        </div>
        <div className="shop-list row">
          {SHOP_GAME_LIST[activeGame].imageList.map((shop, index) => {
            const { img, title = '', price = 0 } = shop;
            return (
              <div key={index} className="col-6 col-md-4 mt-3 mt-md-0 mb-3">
                <div className="shop-list-product">
                  <img src={img} className="shop-list-img" alt="ape iron" />
                </div>
                <p className="title p-0 m-0 mt-2">{title}</p>
                <p className="title p-0 m-0 mt-2">Price</p>
                <div
                  className={`${
                    isHovered.title === title
                      ? 'buy-now-wrapper-active'
                      : 'buy-now-wrapper-inactive'
                  } d-flex flex-row align-items-center`}
                  onMouseLeave={onMouseLeavePrice}
                  onMouseEnter={() => onMouseEnterPrice(shop)}>
                  {isHovered.title === title ? (
                    <p className="buy-now-text p-0 m-0">Buy Now</p>
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

export default DetailShop;