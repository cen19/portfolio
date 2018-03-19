
import React from 'react';

import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

export default (props) => {
  const { html, github, handleClickToCloseSnippet } = props;
  
  return (
    <div>
      <h6 style={{ marginBottom: '1rem' }}>
        <span>Example:</span>
        <a
          className={linkStyles.anchor}
          style={{ float: 'right' }}
          href={github}
          target="_blank">
          {feather('github', [25, 25], iconStyles['expand-icon'])}
        </a>
      </h6>

      <div style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};