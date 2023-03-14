import { useWalletContext } from 'contexts/WalletContext';
import { useState } from 'react';
import { useEffect } from 'react';
// import { getAccountBalance } from 'services/mint';
import { StakingFirstSection } from './FirstSection';
import { StakingSecondSection } from './SecondSection';

import './style.scss';
import { StakingThirdSection } from './ThirdSection';

const Staking = () => {
  const { getBalance } = useWalletContext();

  // state from avail token metamask read
  const [availTokenFromWallet, setAvailTokenFromWallet] = useState(0);

  useEffect(() => {
    async function getBal() {
      const res = await getBalance();
      setAvailTokenFromWallet(res / 10 ** 18);
    }

    getBal();
  });

  return (
    <main className="staking-container" id="staking">
      <StakingFirstSection />
      <StakingSecondSection />
      <StakingThirdSection availToken={availTokenFromWallet} />
    </main>
  );
};

export default Staking;
