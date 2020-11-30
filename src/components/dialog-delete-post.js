import React from 'react';
import PropTypes from 'prop-types';

function DialogDeletePost({ closeDialog, remove }) {
  return (
    <div
      className="modal"
      data-backdrop="static"
      data-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Remove post</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={closeDialog}
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Do you really want to remove the post?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={closeDialog}>
              Close
            </button>
            <button type="button" className="btn btn-delete" onClick={remove}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DialogDeletePost.propTypes = {
  closeDialog: PropTypes.func,
};

DialogDeletePost.defaultTypes = {
  closeDialog: () => {},
};

export default DialogDeletePost;
