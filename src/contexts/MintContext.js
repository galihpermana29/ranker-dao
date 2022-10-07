import { useMutation } from '@tanstack/react-query';
import { onMintBadge } from 'services/interact';

const { createContext, useContext } = require('react');

const BADGE_LEVEL_LIST = {
  bronze: 1,
  silver: 2,
  gold: 3,
  gaming: 4,
};

const COPY_WRITING_CONFIG = {
  UNPREDICTABLE_GAS_LIMIT: 'Insufficient Allowance',
  4001: 'User denied transaction signature',
};

const MintContext = createContext();

export const useMintContext = () => useContext(MintContext);

export const MintContextProvider = ({ children }) => {
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
          errorMessage:
            COPY_WRITING_CONFIG[onMintMutation.error?.code] ||
            'Something went wrong',
          isSuccess: onMintMutation.isSuccess,
          // data: onMintQuery.data,
        },
      }}>
      {children}
    </MintContext.Provider>
  );
};
