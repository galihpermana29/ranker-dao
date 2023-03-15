import { ethers } from 'ethers';
import stackingABI from 'services/stackingABI.json';
import stakeTokenABI from 'services/stakeToken.json';

const provider =
  window.ethereum && window.ethereum.isMetaMask
    ? new ethers.providers.Web3Provider(window.ethereum)
    : null;

let walletAddress = '';
provider.listAccounts().then(data => (walletAddress = data[0]));

const signer = provider.getSigner();

/**
 *
 * @param {integer} amount - amount of token want to be stacked
 * @param {address} env - variable env of locker or nonlocker
 */

export const stacking = async (amount, env) => {
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

export const unstacking = async (amount, env) => {
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

export const allowanceAmount = async (spender, amount) => {
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
export const checkUnclaimableReward = async (address = walletAddress, env) => {
  const contract = new ethers.Contract(env, stackingABI.result, provider);

  try {
    const unclaimable = await contract.earned(address);
    return unclaimable / 10 ** 18;
  } catch (error) {
    console.log(error, 'error');
  }
};

/**
 *
 * @param {address} address - user address that want tobe checked
 */
export const checkCurrentStakeValue = async (address = walletAddress, env) => {
  const contract = new ethers.Contract(env, stackingABI.result, provider);

  try {
    const currentStake = await contract.balanceOf(address);
    return currentStake / 10 ** 18;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const checkFinishedAt = async () => {
  const contract = new ethers.Contract(
    process.env.REACT_APP_CONTRACT_STAKING_ADDRESS,
    stackingABI.result,
    provider,
  );

  try {
    const timeStamp = await contract.finishedAt();
    return parseInt(timeStamp);
  } catch (error) {
    console.log(error, 'error');
  }
};

export const claimRewardStacking = async env => {
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
 * @param {address} env - contract address that want tobe checked
 */
export const checkTodaysReward = async env => {
  const contract = new ethers.Contract(env, stackingABI.result, provider);

  try {
    const todaysReward = await contract.rewardPerToken();
    return todaysReward / 10 ** 18;
  } catch (error) {
    console.log(error, 'error');
  }
};

/**
 *
 * @param {address} env - contract address that want tobe checked
 */
export const checkTotalStakeInPool = async env => {
  const contract = new ethers.Contract(env, stackingABI.result, provider);

  try {
    const totalStakeInPool = await contract.totalSupply();
    return totalStakeInPool / 10 ** 18;
  } catch (error) {
    console.log(error, 'error');
  }
};
