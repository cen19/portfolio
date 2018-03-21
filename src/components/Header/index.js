import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ 
        display: 'inline',
        margin: 0,
      }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          `Wilson Cen`
        </Link>
      </h1>
      <ul 
        style={{
          float: 'right',
          listStyle: 'none',
        }}
      >
        <li style={{ color: 'white' }}>
          <Link to='/' style={{ color: 'white' }}>Home</Link>
        </li>
        <li>
          <Link to='/contact/' style={{ color: 'white' }}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
