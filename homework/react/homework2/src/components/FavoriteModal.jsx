import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

export const FavoriteModal = ({ id, closeButton, handleClose, header, text, actions }) => {  
  return (
    <Modal id={id} closeButton={closeButton} handleClose={handleClose} header={header} text={text} actions={actions}></Modal>
  );
}

FavoriteModal.propTypes = {
  id: PropTypes.string,
  closeButton: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.element
};

FavoriteModal.defaultProps = {
  id: 'modal-favorite',
  closeButton: true,
  header: 'Adding item to the favorites list...',
  text: 'Are you sure you want to add this item to the favorites?' 
};
