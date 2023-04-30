import ImageGalleryItem from '../imageGalleryItem';
import { GalleryList } from './ImageGallery.styled.js';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL }, index) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          index={index}
          openModal={openModal}
        />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
