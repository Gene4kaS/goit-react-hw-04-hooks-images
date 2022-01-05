import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {};

  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.images.map(e => {
          return (
            <>
              <ImageGalleryItem
                onClickPic={this.props.onClickPic}
                id={e.id}
                picture={e}
              />
            </>
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  // onClickPic: PropTypes.func,
};
