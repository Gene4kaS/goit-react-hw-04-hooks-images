import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) {
  const handleImageClick = () => {
    onClick(largeImageURL, tags);
  };

  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={handleImageClick}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
