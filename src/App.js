import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Api from './components/Api';

import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    images: [],
    queryName: '',
    page: 1,
    showModal: false,
    error: null,
    largeImageURL: '',
    imageAlt: '',
    status: 'idle',
  };

  handleFormSubmit = queryName => {
    this.setState({
      queryName: queryName,
      page: 1,
      images: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevqueryName = prevState.queryName;
    const nextqueryName = this.state.queryName;

    if (prevqueryName !== nextqueryName) {
      this.setState({ status: 'pending' });
      this.searchPic();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  searchPic = () => {
    const { queryName, page } = this.state;
    Api.fetchImages(queryName, page)
      .then(array =>
        this.setState(({ images, page }) => ({
          images: [...images, ...array],
          status: 'resolved',
          page: page + 1,
        })),
      )
      .catch(error => this.state({ error, status: 'rejected' }));
  };

  onLoadMore = () => {
    this.searchPic();
  };

  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, imageAlt: alt });

    this.toggleModal();
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  render() {
    const { error, images, showModal, largeImageURL, imageAlt, status } =
      this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery
            status={status}
            images={images}
            error={error}
            onClick={this.onOpenModal}
            onLoadMore={this.onLoadMore}
          />
        )}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            src={largeImageURL}
            alt={imageAlt}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}