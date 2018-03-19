import React from 'react';

import CodeSnippet from './Code-Snippet.js';
import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

class DropDownSkill extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCodeSnippet: false
    };

    this.handleClickToToggleSnippet = this.handleClickToToggleSnippet.bind(this);
    this.handleClickToCloseSnippet = this.handleClickToCloseSnippet.bind(this);
  }

  handleClickToToggleSnippet() {
    this.setState({
      renderCodeSnippet: !this.state.renderCodeSnippet
    });
  }

  handleClickToCloseSnippet() {
    this.setState({ renderCodeSnippet: false });
  }

  render() {
    const { frontmatter, html } = this.props.skill;
    const { title, github, description } = frontmatter;

    return (
      <div>
        <div
          style={{ display: 'inline' }}
        >
          <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={this.handleClickToToggleSnippet}>
            {this.state.renderCodeSnippet ?
              feather('minus-circle', [25, 25], iconStyles['expand-collapse']) :
              feather('plus-circle', [25, 25], iconStyles['expand-collapse'])}
          </div>

          <h5
            style={{
              fontStyle: 'italic',
              display: 'inline-block',
              margin: '0 0.5rem 0.5rem 0.5rem'
            }}
          >
            {title}:
          </h5>

          <span
            style={{
              margin: '0 1rem 1rem 0',
              fontSize: '14px',
              display: 'inline-block',
            }}
          >
            {description}
          </span>
        </div>

        {this.state.renderCodeSnippet ?
          <CodeSnippet
            handleClickToCloseSnippet={this.handleClickToCloseSnippet}
            github={github}
            html={html} /> : null}
      </div>
    );
  }
}

export default DropDownSkill;