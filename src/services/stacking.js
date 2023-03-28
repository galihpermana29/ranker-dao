import { ethers } from 'ethers';
import stackingABI from 'services/stackingABI.json';
import stakeTokenABI from 'services/stakeToken.json';
import rankerLPABI from 'services/rankerLPABI.json';

export function useStakingHooks(walletAddress, walletProvider) {
  let signer;
  if (walletAddress) {
    signer = walletProvider.getSigner();
  }

  /**
   *
   * @param {integer} amount - amount of token want to be stacked
   * @param {address} env - variable env of locker or nonlocker
   */

  const stacking = async (amount, env) => {
    const contract = new ethers.Contract(env, stackingABI.result, signer);
    const val = (parseFloat(amount) * 10 ** 18).toString();
    try {
      const stacking = (await contract.stake(val)).toString();
      return stacking;
    } catch (error) {
      console.log(error, 'stacking error');
    }
  };

  /**
   *
   * @param {integer} amount - amount of token want to be unstacked
   * @param {address} env - variable env of locker or nonlocker
   */

  const unstacking = async (amount, env) => {
    const contract = new ethers.Contract(env, stackingABI.result, signer);
    const val = (parseFloat(amount) * 10 ** 18).toString();
    const stacking = (await contract.withdraw(val)).toString();
    return stacking;
  };

  /**
   *
   * @param {address} spender - contract address spender address
   * @param {integer} amount - amount to be allowance
   */

  const allowanceAmount = async (spender, amount) => {
    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_STAKE_TOKEN_SAMPLE,
      stakeTokenABI.result,
      signer,
    );
    const val = (parseFloat(amount) * 10 ** 18).toString();
    let receipt = null;

    while (receipt === null) {
      try {
        receipt = await contract.approve(spender, val);
        await receipt.wait();
        if (receipt === null) {
          continue;
        }
      } catch (e) {
        console.log(`Receipt error:`, e);
        break;
      }
    }
  };

  /**
   *
   * @param {address} address - user address that want tobe checked
   * @param {address} env - env locked or unlock
   */
  const checkUnclaimableReward = async (address = walletAddress, env) => {
    const contract = new ethers.Contract(
      env,
      stackingABI.result,
      walletProvider,
    );

    try {
      const unclaimable = await contract.earned(address);
      const floating = (unclaimable / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  /**
   *
   * @param {address} address - user address that want tobe checked
   */
  const checkCurrentStakeValue = async (address = walletAddress, env) => {
    const contract = new ethers.Contract(
      env,
      stackingABI.result,
      walletProvider,
    );
    try {
      const currentStake = await contract.balanceOf(address);
      const floating = (currentStake / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const checkCurrentLP = async (address, env) => {
    const contract = new ethers.Contract(
      env,
      rankerLPABI.result,
      walletProvider,
    );
    try {
      const currentLP = await contract.balanceOf(address);
      const floating = (currentLP / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error current');
    }
  };

  const checkFinishedAt = async () => {
    const contract = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_STAKING_ADDRESS,
      stackingABI.result,
      walletProvider,
    );

    try {
      const timeStamp = await contract.finishedAt();
      return parseInt(timeStamp);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const claimRewardStacking = async env => {
    const contract = new ethers.Contract(env, stackingABI.result, signer);

    try {
      const claimReward = await contract.claimReward();
      return claimReward;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  /**
   *
   * @param {Address} env - contract Address that want tobe checked
   * @param {Address} address - wallet address to be checked
   */
  const checkTodaysReward = async (env, address = walletAddress) => {
    const contract = new ethers.Contract(
      env,
      stackingABI.result,
      walletProvider,
    );

    try {
      const todaysReward = await contract.earned(address);
      const floating = (todaysReward / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  /**
   *
   * @param {address} env - contract address that want tobe checked
   */
  const checkTotalStakeInPool = async env => {
    const contract = new ethers.Contract(
      env,
      stackingABI.result,
      walletProvider,
    );

    try {
      const totalStakeInPool = await contract.totalSupply();
      const floating = (totalStakeInPool / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const checkTotalRewardEachSection = async env => {
    const contract = new ethers.Contract(
      env,
      stackingABI.result,
      walletProvider,
    );

    try {
      const totalStakeInPool = await contract.totalReward();
      const floating = (totalStakeInPool / 10 ** 18).toFixed(2);
      return floating;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return {
    allowanceAmount,
    checkCurrentLP,
    checkCurrentStakeValue,
    checkFinishedAt,
    checkTodaysReward,
    checkTotalRewardEachSection,
    checkTotalStakeInPool,
    checkUnclaimableReward,
    claimRewardStacking,
    stacking,
    unstacking,
  };
}
