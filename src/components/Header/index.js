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
      <span>
        <h1 style={{ 
          display: 'inline-block',
          margin: 0,
          // float: 'left',
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
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start'

          }}
        >
          <li>check1</li>
          <li>check2</li>
          <li>check3</li>
        </ul>
      </span>
    </div>
  </div>
);

export default Header;
