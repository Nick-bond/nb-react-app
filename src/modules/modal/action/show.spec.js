import actionTypes from '../../../constants/action-types';
import dialogTypes from '../../../constants/dialog-types';
import actions from './index';

describe('show', () => {
  it('show dialog', () => {
    const payload = {
      type: dialogTypes.LOAD_DIALOG,
      dialogProps: { titleText: 'Simple text' },
    };
    const expectedAction = {
      type: actionTypes.SHOW_DIALOGS,
      payload,
    };
    expect(actions.show(payload.type, payload.dialogProps)).toEqual(
      expectedAction
    );
  });
});
