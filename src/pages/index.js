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
    backEndCode,
    dbCode
  ] = edges;
  console.log(reactNativeCode);

  return (
    <div>
      <h3>Welcome! Check out some of the code I've written below.</h3>
      <br />
      <h5 style={{ color: 'rebeccapurple' }}>Front End</h5>
      <div>
        <DropDownSkill skill={reactNativeCode.node} />
        <DropDownSkill skill={frontEndCode.node} />
      </div>
      <h5>Back End</h5>
        <DropDownSkill skill={backEndCode.node} />
      <h5>Diagrams</h5>
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