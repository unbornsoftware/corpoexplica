//Redux
export const useResetComponentMessage = (dispatch, resetAction) => {
  return () => {
    setTimeout(() => {
      dispatch(resetAction());
    }, 5000);
  };
};