import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <div className={s.button_center}>
    <button type="button" onClick={onLoadMore} className={s.Button}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
