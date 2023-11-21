import { useEffect, useState } from 'react';

import RankerCoinImg from 'assets/img/shop/ranker-coin.png';

import './style.scss';
import { Link, useParams } from 'react-router-dom';
import { DUMMY_DATA } from './constant';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useWalletContext } from 'contexts/WalletContext';
import { useStakingHooks } from 'services/stacking';
import { ConfirmAlert } from 'pages/staking/modal/confirm-alert';
import { Modal } from 'components/modal';

export const checkImageUrl = (url = '') => {
  const images = url.split('//');
  if (images[0] === '')
    return 'https://ipfs.io/ipfs/QmQtbA1RdTzRBLxEWAkdzdF7N1yxSyphfBDBak2DZYBBc9/B.gif';
  if (images[0] === 'https:') return url;
  else if (images[0] === 'ipfs:') return 'https://ipfs.io/ipfs/' + images[1];
};

const DetailShop = () => {
  const [isHovered, setIsHovered] = useState({});
  const { id } = useParams();
  const [data, setData] = useState({});
  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState({
    visible: false,
    type: null,
  });

  const getListingData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/api/v1' + `/listings?gameId=${id}&sold=false`);
      const mappedData = data.map(d => ({
        ...d,
        raw_data: JSON.parse(d.raw_data),
      }));
      return mappedData;
    } catch (err) {
      throw err;
    }
  };
  const { data: listings } = useQuery(['listings'], getListingData);
  const mutation = useMutation({
    mutationFn: idListing => {
      return axios.patch(`/api/v1/listings/sold/${idListing}`);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });

  const { address = '', provider } = useWalletContext();
  const { allowanceNFTMint, purchaseErc721, purchaseERC1155 } = useStakingHooks(
    address,
    provider,
  );

  const onMouseEnterPrice = shop => {
    setIsHovered(shop);
  };

  const onMouseLeavePrice = () => {
    setIsHovered({});
  };

  const onBuyItem = async value => {
    const { price, contractAddress, raw_data, id } = value;
    const { tokenId, tokenType } = raw_data;

    try {
      await allowanceNFTMint(process.env.REACT_APP_CONTRACT_TRADER, price);
      if (tokenType === 'ERC721') {
        await purchaseErc721(contractAddress, tokenId);
      } else {
        await purchaseERC1155(contractAddress, tokenId);
      }
      mutation.mutate(id);
      setIsOpenModal({ visible: true, type: 'STAKE_SUCCESS' });
    } catch (error) {
      setIsOpenModal({ visible: true, type: 'STAKE_FAILED' });
      console.log(error, 'error');
    }
  };

  const modalType = {
    STAKE_SUCCESS: <ConfirmAlert type="MINT_SUCCESS" />,
    STAKE_FAILED: <ConfirmAlert type="MINT_FAILED" />,
  };

  useEffect(() => {
    let filtered = DUMMY_DATA.filter(datas => datas.id === parseInt(id));
    setData(filtered[0]);
  }, [id]);

  return (
    <div className="shop-container">
      <Modal
        isOpen={isOpenModal.visible}
        onClose={() => {
          setIsOpenModal({ visible: false, type: null });
        }}>
        {modalType[isOpenModal.type] || <></>}
      </Modal>
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

          <div className="w-full button-wrapper">
            <Link className="button" to="/shop">
              BROWSE OTHER GAMES
            </Link>
          </div>
        </div>
        <div className="shop-list row">
          {listings?.map((shop, index) => {
            const { raw_data, title = '', price = 0 } = shop;
            console.log(raw_data, 'raw dat');
            const { image, tokenType, lister } = raw_data;
            return (
              <div
                key={index}
                className="col-6 col-md-4 mt-3 mt-md-0 mb-3"
                onMouseLeave={onMouseLeavePrice}
                onMouseEnter={() => onMouseEnterPrice(shop)}>
                <div className="shop-list-product">
                  <img
                    src={checkImageUrl(image)}
                    className="shop-list-img"
                    alt="ape iron"
                  />
                </div>
                <p className="title p-0 m-0 mt-2">{title}</p>
                <p className="tokenType p-0 m-0">{tokenType}</p>
                <p className="title p-0 m-0 mt-2">Price</p>
                {(address === lister || isHovered.title !== title) && (
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src={RankerCoinImg}
                      alt="ranker coin"
                      className="ranker-coin-img"
                    />
                    <p className="m-0 p-0 ms-2 price">{price}</p>
                  </div>
                )}
                {address !== lister && (
                  <div
                    onClick={() => onBuyItem(shop)}
                    className={`${
                      isHovered.title === title
                        ? 'buy-now-wrapper-active'
                        : 'buy-now-wrapper-inactive'
                    } d-flex flex-row align-items-center`}>
                    {isHovered.title === title && (
                      <p className="buy-now-text p-0 m-0">Buy Now</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailShop;
