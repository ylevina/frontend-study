import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

export const CartModal = ({ id, closeButton, handleClose, header, text, actions }) => {  
  return (
    <Modal id={id} closeButton={closeButton} handleClose={handleClose} header={header} text={text} actions={actions}></Modal>
  );
}

CartModal.propTypes = {
  id: PropTypes.string,
  closeButton: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.element
};

CartModal.defaultProps = {
  id: 'modal-cart',
  closeButton: true,
  header: 'Adding item to cart',
  text: 'Are you sure you want to add this item to cart?'  
};
