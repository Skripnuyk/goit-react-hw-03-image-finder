import { LoadMoreButton } from './Button.styled.js';
import PropTypes from 'prop-types';

export default function Button({ nextPage }) {
  return (
    <LoadMoreButton type="button" onClick={nextPage}>
      Load more
    </LoadMoreButton>
  );
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
