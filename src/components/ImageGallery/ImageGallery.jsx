import PropTypes from "prop-types";

 const ImageGallery = ({images, onClick}) => {
    return (
      <>
          <ul className="gallery">
         {images.map((image) => {
          return (
           <li key={image.id} className="gallery-item">
           <img
          src={image.webformatURL}
          alt={image.tags}
          className="imageGalleryItem-image"
          onClick={(e) => onClick(e, image.largeImageURL)}/>
           </li>
          );
        })}
       </ul>
      </>
      );
  }

ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired
    })).isRequired,
  };



export default ImageGallery;