import React from 'react';
import Link from 'gatsby-link';

import linkStyles from '../styles/link.module.css';

const ContactPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: '600px', textAlign: 'center' }}>
    <p>Email me at <a href="mailto:wilsoncen@gmail.com?subject=Hello!" target="_blank" className={linkStyles.anchor}>wilsoncen@gmail.com</a>.</p>
    <p> Check out my <a href="https://github.com/cen19" target="_blank" className={linkStyles.anchor}>GitHub</a>.</p>
    <p>Connect with me on <a href="https://www.linkedin.com/in/wilsoncen/" target="_blank" className={linkStyles.anchor}>LinkedIn</a>.</p>
    <p>Go back to the <Link to="/" className={linkStyles.anchor}>homepage</Link>.</p>
  </div>
);

export default ContactPage;