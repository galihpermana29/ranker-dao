import { useMutation } from '@tanstack/react-query';
import { onMintBadge } from 'services/interact';

const { createContext, useContext } = require('react');

const BADGE_LEVEL_LIST = {
  bronze: 1,
  silver: 2,
  gold: 3,
  gaming: 4,
};

const MintContext = createContext();

export const useMintContext = () => useContext(MintContext);

export const MintContextProvider = ({ children }) => {
  // token address = 0xbb3B92333bc2F429d72dF0F7d6D065fBaE9F88c9
  // badge address = 0x9A4E899579DB428C1246140D4a8562d8ED25d42b

  // read
  // const allowance = () => {
  //   const owner = '0x42180Fa6993592812AC9dA5C2923B22E49Df1346';
  //   const spender = '0x9A4E899579DB428C1246140D4a8562d8ED25d42b';
  // };

  // const balanceOf = () => {
  //   const accountAddress = '0x42180Fa6993592812AC9dA5C2923B22E49Df1346';
  // };

  // // write
  // const approve = () => {
  //   const address = '0x9A4E899579DB428C1246140D4a8562d8ED25d42b';
  // };

  const onMintMutation = useMutation(
    payload => {
      const { type = '', address = '', amount = 0 } = payload;
      if (!type || !address || !amount) return 'error on payload';
      return onMintBadge(BADGE_LEVEL_LIST[type], address, amount);
    },
    {
      onSuccess: (_, variable) => {
        return variable;
      },
      onError: error => {
        const code = error.code;
        const message = error.error.message;
        console.log('code', code);
        console.log('message', message);
      },
    },
  );

  return (
    <MintContext.Provider
      value={{
        mintTask: {
          execute: payload => onMintMutation.mutate(payload),
          loading: onMintMutation.isLoading,
          error: onMintMutation.isError,
          errorMessage: onMintMutation.error?.code,
          isSuccess: onMintMutation.isSuccess,
          // data: onMintQuery.data,
        },
      }}>
      {children}
    </MintContext.Provider>
  );
};
