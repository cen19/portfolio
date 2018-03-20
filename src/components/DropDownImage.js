import React from 'react';

import Image from './ImageSnippet';
import feather from '../utils/feather';

import linkStyles from '../styles/link.module.css';
import iconStyles from '../styles/icon.module.css';

class ImageDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderImage: false
    };

    this.handleClickToToggleImage = this.handleClickToToggleImage.bind(this);
    this.handleClickToCloseImage = this.handleClickToCloseImage.bind(this);
  }

  handleClickToToggleImage() {
    this.setState({
      renderImage: !this.state.renderImage
    });
  }

  handleClickToCloseImage() {
    this.setState({ renderImage: false });
  }

  render() {
    const { image, title, description } = this.props;

    return (
      <div>
        <div
          style={{ display: 'inline' }}
        >
          <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={this.handleClickToToggleImage}>
            {this.state.renderImage ?
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
              display: 'inline-block'
            }}
          >
            {description}
          </span>
        </div>
        
        {this.state.renderImage ?
          <Image
            handleClickToCloseImage={this.handleClickToCloseImage}
            image={image}
            title={title} /> : null}
      </div>
    );
  }
}

export default ImageDescription;