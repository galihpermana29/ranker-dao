import { StakingFirstSection } from './FirstSection';
import { StakingSecondSection } from './SecondSection';

import './style.scss';
import { StakingThirdSection } from './ThirdSection';

const Staking = () => {
  return (
    <main className="staking-container" id="staking">
      <StakingFirstSection />
      <StakingSecondSection />
      <StakingThirdSection />
    </main>
  );
};

export default Staking;
