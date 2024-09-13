//Redux
import { resetMessage } from "../slices/authSlice";

export const useResetComponentMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage(0));
    }, 5000);
  };
};