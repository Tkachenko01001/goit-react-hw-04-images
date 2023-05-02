import { useState, useEffect } from "react";
import { MutatingDots } from 'react-loader-spinner'
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal'
import LoadMore from "./LoadMore/LoadMore";

const KEY_API = "35689360-928715b1acfc50b960ec2f2b7";
const URL_API = "https://pixabay.com/api/?";

const App = () => {

  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }

    setIsloading(true);

    fetch(
      `${URL_API}q=${name}&page=${page}&key=${KEY_API}&images_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.json())

    .then(image => {
      if (!image.total) {
        return alert('К сожалению по Вашему запросу ничего не найдено');
      }

    setImages(prevState => [...prevState, ...image.hits])
    }
    )

    .catch(error => error)

    .finally(() => setIsloading(false));
  }, [name, page]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleEscapeKey();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  const toggleModal = (e) => {

    if (e.target.tagName === 'IMG' && showModal) {
      return;
    }

    setShowModal(false);
  }
  
  const handleImageClick = (e, imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleFormSubmit = (name) => {
    setName(name);
    setImages([]);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  }

  const handleEscapeKey = () => {
    setShowModal(false);
  };

    return (
      <>
        <SearchBar submit={handleFormSubmit} />

        {images.length > 0 && (
          <>
          <ImageGallery
          onClick={handleImageClick}
          images={images}
          />
          <LoadMore onClick={handleLoadMoreClick} />
          </>
        )}

        {isloading && <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass="spiner"
            visible={true} />
        }
        
        {showModal && (
          <Modal selectedImage={selectedImage} onCloseModal={toggleModal} />
        )}
      </>
    );
  }

export default App;