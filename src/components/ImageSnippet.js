import React from 'react';

import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

export default (props) => {
  const { image, title, handleClickToCloseImage } = props;
  
  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{
          border: '3px solid black',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}/>
    </div>
  );
};