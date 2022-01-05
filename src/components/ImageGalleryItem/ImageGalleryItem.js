import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ picture }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={picture.webformatURL}
        alt={picture.tags}
        id={picture.id}
        className={s.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  picture: PropTypes.object,
  // key: PropTypes.number,
  //   onClickPic: PropTypes.func,
};
