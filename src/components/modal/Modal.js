import { Component } from 'react';
import { ModalWrap, ModalWindow, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  render() {
    const { handleBackdropClick } = this;
    const { largeImage } = this.props;
    return (
      <ModalWrap onClick={handleBackdropClick}>
        <ModalWindow>
          <ModalImage src={largeImage} alt="" />
        </ModalWindow>
      </ModalWrap>
    );
  }
}
