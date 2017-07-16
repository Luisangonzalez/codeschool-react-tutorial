import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment-box.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CommentBox/>, document.getElementById('comment-box'))
  registerServiceWorker();
