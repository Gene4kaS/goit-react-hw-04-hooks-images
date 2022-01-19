import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button';
import Loader from '../Loader';

export default function ImageGallery({
  status,
  error,
  images,
  onLoadMore,
  onClick,
}) {
  const handleImageClick = (imageURL, imageALT) => {
    onClick(imageURL, imageALT);
  };

  if (status === 'idle') {
    return <div className={s.enter_query}>Enter search query</div>;
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
            return (
              <ImageGalleryItem
                onClick={handleImageClick}
                id={id}
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ul>
        {<Button onLoadMore={onLoadMore} />}
      </>
    );
  } else {
    return <div className={s.enter_query}>We can't find it</div>;
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};
