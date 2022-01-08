import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button';
import Loader from '../Loader';

export default class ImageGallery extends Component {
  handleImageClick = (imageURL, imageALT) => {
    this.props.onClick(imageURL, imageALT);
  };

  render() {
    const { status, error, images, onLoadMore } = this.props;
    if (status === 'idle') {
      return <div>Enter search query</div>;
    }
    if (status === 'pending') {
      return Loader();
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved' && images.length !== 0) {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => {
              <ImageGalleryItem
                onClick={this.handleImageClick}
                id={id}
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />;
            })}
          </ul>
          {<Button onLoadMore={onLoadMore} />}
        </>
      );
    } else {
      return <div>We can't find it</div>;
    }
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};
