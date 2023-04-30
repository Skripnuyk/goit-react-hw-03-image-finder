import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled.js';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, index, openModal }) {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        onClick={() => openModal(index)}
        alt=""
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
