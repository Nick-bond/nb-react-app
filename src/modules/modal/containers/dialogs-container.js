import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import components from '../../../components/index';
import selectors from '../../../store/selectors/index';
import dialogs from '../index';

function DialogsContainer() {
  const dispatch = useDispatch();

  const closeDialog = useCallback(() => {
    dispatch(dialogs.actions.hide());
  }, []);

  const dialog = useSelector(selectors.getDialog);
  const dialogProps = dialog.dialogProps || {};
  dialogProps['closeDialog'] = closeDialog;
  const DialogComponent = components[dialog.type];

  return DialogComponent ? <DialogComponent {...dialogProps} /> : null;
}

export default DialogsContainer;
