import actionTypes from '../../../constants/action-types';

export const DEFAULT_STATE = {
  type: null,
  dialogProps: null,
};

const activeDialog = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SHOW_DIALOGS:
      return action.payload;
    case actionTypes.HIDE_DIALOG:
      return DEFAULT_STATE;
    default:
      return state;
  }
};

export default activeDialog;
