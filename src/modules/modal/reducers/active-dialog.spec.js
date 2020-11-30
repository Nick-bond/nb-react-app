import reducer from './index';
import actions from '../action';
import actionTypes from '../../../constants/action-types';
import dialogTypes from '../../../constants/dialog-types';
import { DEFAULT_STATE } from './active-dialog';

describe('activeDialog', () => {
  describe(`when action type is ${actionTypes.SHOW_DIALOG}`, () => {
    it('should return new state with provided type and dialog properties', () => {
      const type = dialogTypes.SIMPLE;
      const dialogProps = { titleText: 'Some simple text' };
      expect(reducer.activeDialog({}, actions.show(type, dialogProps))).toEqual(
        {
          type,
          dialogProps,
        }
      );
    });
  });

});
