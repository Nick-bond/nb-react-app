import actionTypes from '../../../constants/action-types';

const show = (type, dialogProps) => ({
  type: actionTypes.SHOW_DIALOGS,
  payload: {
    type,
    dialogProps,
  },
});

export default show;
