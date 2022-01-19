import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import api from './components/Api';

import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [queryName, setQueryName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [status, setStatus] = useState('idle');

  const handleFormSubmit = queryName => {
    setQueryName(queryName);
    setPage(page);
    setImages(images);
  };

  useEffect(() => {
    if (queryName !== '') {
      setStatus('pending');
      searchPic();
    }
    if (page !== setPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [queryName]);

  const searchPic = () => {
    api
      .fetchImages(queryName, page)
      .then(res => {
        setImages([...images, ...res]);
        setStatus('resolved');
        setPage(page => page + 1);
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  };

  const onLoadMore = () => {
    searchPic();
  };

  const onOpenModal = (url, alt) => {
    setLargeImageURL(url);
    setImageAlt(alt);

    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <div className={s.App}>
      {showModal && (
        <Modal src={largeImageURL} alt={imageAlt} onCloseModal={toggleModal} />
      )}
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        status={status}
        error={error}
        images={images}
        onClick={onOpenModal}
        onLoadMore={onLoadMore}
      />

      <ToastContainer />
    </div>
  );
}
