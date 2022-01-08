// import * as basicLightbox from 'basiclightbox';
import React, { Component } from 'react';
import s from './Modal.modul.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };
  render() {
    const { src, alt } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

// Modal.propTypes = {
//   src: PropTypes.string,
//   // alt: PropTypes.string,
//   onCloseModal: PropTypes.func,
// };
