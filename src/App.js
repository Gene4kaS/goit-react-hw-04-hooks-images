import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import s from './App.module.css';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';

import fetchImages from './components/Api';

export default class App extends Component {
  state = {
    images: [],
    searchPic: '',
    queryName: '',
    page: 1,
    showModal: false,
    isLoading: false,
  };

  componentDidMount() {
    const { state } = this;
    this.setState({ isLoading: true });
    if (state.images.length === 0) {
      this.setState();
      fetchImages('home', 1)
        .then(array => {
          this.setState({ images: array });
        })
        .catch(error => console.log(error));
    }
  }

  getQuery = queryName => {
    this.setState({ queryName: queryName });

    fetchImages(queryName, 1)
      .then(array => {
        this.setState(prevState => {
          return { images: [...array], page: 1 };
        });
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

  handleLargeURLImage = data => {
    this.setState({ largeImageURL: data });
    this.setState({ showModal: true });
  };

  render() {
    const { images, showModal, largeImageURL, isLoading } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.getQuery} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleLargeURLImage={this.handleLargeURLImage}
          />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 && <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}
