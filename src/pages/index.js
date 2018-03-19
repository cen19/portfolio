import React from 'react';
import Link from 'gatsby-link';
import CodeSnippet from '../components/Code-Snippet';
import DropDownSkill from '../components/DropDownSkill';

const IndexPage = (props) => {
  console.log('propsdataallmarkdownremark =>', props.data.allMarkdownRemark);
  const { edges } = props.data.allMarkdownRemark;
  const [
    reactNativeCode,
    frontEndCode,
    rest1,
    rest2
  ] = edges;
  console.log(reactNativeCode);

  return (
    <div>
      <h1>Hi people</h1>
      <p><Link to='/assets/react-native-code/'>check out some of the front end code I've written</Link></p>
      <div>
        <DropDownSkill skill={reactNativeCode.node} />
      </div>
      <p><Link to="/assets/front-end-code/">form code</Link></p>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query AssetsQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___order], order: ASC}) {
      edges {
        node {
          frontmatter {
            title
            order
            github
            description
          }
          html
        }
      }
    }
  }
`;