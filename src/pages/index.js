import React from 'react';
import Link from 'gatsby-link';
import DropDownSkill from '../components/DropDownSkill';
import DropDownImage from '../components/DropDownImage';
import DBSchemas from '../assets/Diagrams/SQL_Schemas.jpg';
import SystemDiagram from '../assets/Diagrams/converge-admin-system-diagram.png';

const IndexPage = (props) => {
  console.log('propsdataallmarkdownremark =>', props.data.allMarkdownRemark);
  const { edges } = props.data.allMarkdownRemark;
  const [
    reactNativeCode,
    frontEndCode,
    addPresentation,
    editPresentation,
  ] = edges;

  return (
    <div>
      <h3>Welcome! Check out some of the code I've written below.</h3>
      <br />
      <h3 style={{ color: 'rebeccapurple' }}>Front End</h3>
      <div>
        <DropDownSkill skill={reactNativeCode.node} />
        <DropDownSkill skill={frontEndCode.node} />
      </div>
      <h3 style={{ color: 'rebeccapurple' }}>Back End</h3>
      <div>
        <DropDownSkill skill={addPresentation.node} />
        <DropDownSkill skill={editPresentation.node} />
      </div>
      <h3 style={{ color: 'rebeccapurple' }}>Diagrams</h3>
      <div>
        <DropDownImage 
          image={DBSchemas}
          title='DB Schemas'
          description='White boarded DB schemas to figure out the best approach to storing data associated with conferences.'
        />
      </div>
      <div>
        <DropDownImage 
          image={SystemDiagram}
          title='System Diagram'
          description='System diagram for a conference management mobile app.'
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