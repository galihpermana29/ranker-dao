import { useMutation, useQuery } from '@tanstack/react-query';
import { onCheckBadgeLimit, onMintBadge } from 'services/interact';

const { createContext, useContext } = require('react');

const BADGE_LEVEL_LIST = {
  bronze: 1,
  silver: 2,
  gold: 3,
  gaming: 4,
};

const COPY_WRITING_CONFIG = {
  UNPREDICTABLE_GAS_LIMIT: 'Insufficient Allowance',
  '-32603': 'Insufficient Allowance',
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
        console.log('success');
        return variable;
      },
      onError: error => {
        console.log('error', error);
        const code = error.code;
        const message = error.error.message;
        console.log('code', code);
        console.log('message', message);
        return error;
      },
    },
  );

  console.log('onMintMutation', onMintMutation);

  const goldSupply = useQuery(['gold'], () => {
    return onCheckBadgeLimit(BADGE_LEVEL_LIST['gold']);
  });

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
        goldSupply: goldSupply,
      }}>
      {children}
    </MintContext.Provider>
  );
};
