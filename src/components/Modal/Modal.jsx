import PropTypes from "prop-types";

const Modal = ({selectedImage, onCloseModal}) => {

        return (<div className="overlay" onClick={onCloseModal}>
        <div className="modal">
        <img src={selectedImage} alt="" />
        </div>
      </div>
    )
    }
    
Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;