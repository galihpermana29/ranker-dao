export const TextSwitch = ({
  initText = '',
  isLoading,
  isSuccess,
  isError,
  successText,
  errorText,
}) => {
  if (isLoading) {
    return 'Loading';
  }
  if (isError) {
    return errorText;
  }

  if (isSuccess) {
    return successText;
  } else {
    return initText;
  }
};
