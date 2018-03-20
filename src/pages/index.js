import React from 'react';
import Link from 'gatsby-link';
import DropDownSkill from '../components/DropDownSkill';
import DropDownImage from '../components/DropDownImage';
import DBSchemas from '../assets/Diagrams/SQL_Schemas.jpg';

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
      <h5 style={{ color: 'rebeccapurple' }}>Back End</h5>
      <div>
        <DropDownSkill skill={backEndCode.node} />
      </div>
      <h5 style={{ color: 'rebeccapurple' }}>Diagrams</h5>
      <div>
        <DropDownImage 
          image={DBSchemas}
          title='DB Schemas'
          description='White boarded DB schemas to figure out the best approach to storing data associated with conferences.'
        />
      </div>
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