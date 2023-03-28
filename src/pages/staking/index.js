import { useWalletContext } from 'contexts/WalletContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useStakingHooks } from 'services/stacking';
// import { getAccountBalance } from 'services/mint';
import { StakingFirstSection } from './FirstSection';
import { StakingSecondSection } from './SecondSection';

import './style.scss';
import { StakingThirdSection } from './ThirdSection';

import axios from 'axios';
import { checkUserNetworkForTestnet } from 'services/interact';

const Staking = () => {
  const {
    address = '',
    provider,
    getBalance,
    onConnect,
    isConnect,
  } = useWalletContext();
  const { checkTotalStakeInPool, checkTotalRewardEachSection } =
    useStakingHooks(address, provider);

  // state from avail token metamask read
  const [availTokenFromWallet, setAvailTokenFromWallet] = useState(0);

  const [stats, setStats] = useState({
    totalStakeInPool: 0,
    totalRewardEachSection: 0,
    currentRankerPrice: 0,
  });

  const getRankerToIDRT = async () => {
    try {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=rankerdao&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h',
      );
      setStats(stats => ({
        ...stats,
        currentRankerPrice: data[0].current_price,
      }));
    } catch (error) {
      console.log(error, 'err');
    }
  };

  useEffect(() => {
    const onClickConnect = () => {
      if (!isConnect) {
        onConnect()
          .then(response => console.log('response', response))
          .catch(error => console.log('error: ', error));
      }
    };
    onClickConnect();
    checkUserNetworkForTestnet();
  }, [isConnect, onConnect]);

  useEffect(() => {
    const getStat = async () => {
      try {
        const env = process.env.REACT_APP_CONTRACT_STAKING_ADDRESS;
        const totalStakeInPool = await checkTotalStakeInPool(env);
        const totalRewardEachSection = await checkTotalRewardEachSection(env);
        setStats(stats => ({
          ...stats,
          totalStakeInPool,
          totalRewardEachSection,
        }));
      } catch (error) {
        console.log('Error while getting stats', error);
      }
    };
    if (address) {
      getStat();
      getRankerToIDRT();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    async function getBal() {
      const res = await getBalance();
      setAvailTokenFromWallet(res / 10 ** 18);
    }

    if (address) {
      getBal();
    }
  }, [address, getBalance]);

  return (
    <main className="staking-container" id="staking">
      <StakingFirstSection />
      <StakingSecondSection statistic={stats} />
      <StakingThirdSection availToken={availTokenFromWallet} />
    </main>
  );
};

export default Staking;
