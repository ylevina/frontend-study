import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { Button } from './Button';
import { Modal } from './Modal';

export const ProductCard = ({ productInfo, isFavorite, hasFavoriteButton, favoriteButtonHandler, isInCart, hasAddCartButton, cartHandler, hasRemoveCartButton}) => {
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [favoriteState, setFavoriteState] = useState(isFavorite);
  const [cartState, setCartState] = useState(isInCart);

  const favoriteModalProps = {
    id: 'modal-favorite',
    closeButton: true,
    handleClose: () => { setShowFavoritesModal(false) },
    header: favoriteState ? 'Removing item from the favorites list...' : 'Adding item to the favorites list...',
    text: favoriteState ? 'Are you sure you want to remove this item from the favorites?' : 'Are you sure you want to add this item to the favorites?',
    actions: <>
      <Button backgroundColor="#B3382C" text="Ok" onClick={() => { favoriteButtonHandler(productInfo.id); setFavoriteState(!favoriteState); setShowFavoritesModal(false); }}></Button>
      <Button backgroundColor="#B3382C" text="Cancel" onClick={() => { setShowFavoritesModal(false) }}></Button>
    </>
  };

  const cartModalProps = {
    id: 'modal-cart',
    closeButton: true,
    handleClose: () => { setShowCartModal(false) },
    header: cartState ? 'Removing item from the cart...' : 'Adding item to the cart...',
    text: cartState ? 'Are you sure you want to remove this item from the cart?' : 'Are you sure you want to add this item to the cart?',
    actions: <>
      <Button backgroundColor="#B3382C" text="Ok" onClick={() => {cartHandler(productInfo.id); setShowCartModal(false); }}></Button>
      <Button backgroundColor="#B3382C" text="Cancel" onClick={() => { setShowCartModal(false) }}></Button>
    </>
  };

  return (
    <StyledListItem>
      <Image src={productInfo.picture_url}></Image>
      <Content>
        <SubTitle>{productInfo.restraunt}</SubTitle>
        <Title>{productInfo.name}</Title>
        <Price>{productInfo.price}</Price>
        <Buttons>
          {hasFavoriteButton && <StyledFavoritesIcon icon={faStar} favoriteState={favoriteState} onClick={() => { setShowFavoritesModal(true); }}></StyledFavoritesIcon>}
          {hasRemoveCartButton && <StyledCancelIcon icon={faWindowClose} onClick={() => setShowCartModal(true)}></StyledCancelIcon>}
          {hasAddCartButton && <Button backgroundColor='#CC3333' onClick={() => setShowCartModal(true)} text='Add to cart'></Button>}
        </Buttons>
      </Content>
      {showFavoritesModal && <Modal {...favoriteModalProps}></Modal>}
      {showCartModal && <Modal {...cartModalProps}></Modal>}
    </StyledListItem>
  );
}

ProductCard.propTypes = {
  productInfo: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool,
  hasFavoriteButton: PropTypes.bool,
  favoriteButtonHandler: PropTypes.func,
  isInCart: PropTypes.bool, 
  hasAddCartButton: PropTypes.bool, 
  cartHandler: PropTypes.func, 
  hasRemoveCartButton: PropTypes.bool
};

ProductCard.defaultProps = {
  isFavorite: false,
  hasFavoriteButton: false,
  isInCart: false, 
  hasAddCartButton: false, 
  hasRemoveCartButton: false
};

const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`
const Image = styled.img`
  width: 300px;
  height: 210px;
  border-radius: 10px;
`
const Content = styled.div`
  padding: 15px;
`
const Title = styled.h3`
  width: 100%;
  font-weight: bold;
  margin: 15px 0 10px;
  font-family: 'Roboto', sans-serif;
`
const SubTitle = styled.h5`
  width: 100%;
  font-size: 14px; 
  font-weight: normal;
  margin: 0 0 10px;
  font-family: 'Roboto', sans-serif;
`
const Price = styled.p`
  font-size: 18px;  
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`
const Buttons = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
`
const StyledFavoritesIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 210px;
  right: 0;  
  font-size: 20px; 
  margin: 10px;
  cursor: pointer;
  color: ${props => props.favoriteState ? '#CC3333' : '#cfcece'};
`
const StyledCancelIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;  
  font-size: 20px; 
  margin: 10px;
  cursor: pointer;
  color: #CC3333;
`