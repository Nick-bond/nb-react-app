import React from 'react';
import ReactDOM from 'react-dom';
import DialogDeletePost from './dialog-delete-post';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DialogDeletePost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
