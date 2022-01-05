import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => (
  <div>
    <button type="button" onClick={onClick} className={s.Button}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
