import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = `34495006-71ec78aa9b10719ae520ad987`;

export default function fetchImages(query, page) {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
