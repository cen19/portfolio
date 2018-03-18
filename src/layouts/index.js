import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';
require('prismjs/themes/prism-solarizedlight.css');


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Wilson Cen's Portfolio"
      meta={[
        { name: 'Wilson Cen', content: 'Portfolio' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
