import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p><Link to='/assets/react-native-code/'>check out some of the front end code I've written</Link></p>
    <p><Link to="/assets/front-end-code/">form code</Link></p>
  </div>
);

export default IndexPage;
