import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Button } from './Button';
import { FavoriteModal } from './FavoriteModal';
import { CartModal } from './CartModal';

export const ProductItem = ({ itemInfo }) => {
  const [favorite, setFavorite] = useState(false);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites && favorites.split(',').includes(`${itemInfo.id}`)) setFavorite(true);
  }, []);

  const addToFavorites = (id) => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      let favArray = favorites.split(',');
      favArray.push(id);
      localStorage.setItem('favorites', favArray.join(','));
    }
    else {
      localStorage.setItem('favorites', id);
    }

    setFavorite(true);
  }

  const addToCart = (id) => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      let cartArray = cart.split(',');
      cartArray.push(id);
      localStorage.setItem('cart', cartArray.join(','));
    }
    else {
      localStorage.setItem('cart', id);
    }
  }

  const favoriteModalProps = {
    handleClose: () => { setShowFavoritesModal(false) },
    actions: <>
      <Button backgroundColor="#B3382C" text="Ok" onClick={() => { addToFavorites(itemInfo.id); setShowFavoritesModal(false); }}></Button>
      <Button backgroundColor="#B3382C" text="Cancel" onClick={() => { setShowFavoritesModal(false) }}></Button>
    </>
  };

  const cartModalProps = {
    handleClose: () => { setShowCartModal(false) },
    actions: <>
      <Button backgroundColor="#B3382C" text="Ok" onClick={() => { addToCart(itemInfo.id); setShowCartModal(false); }}></Button>
      <Button backgroundColor="#B3382C" text="Cancel" onClick={() => { setShowCartModal(false) }}></Button>
    </>
  };

  return (
    <StyledListItem>
      <Image src={itemInfo.picture_url}></Image>
      <Title>{itemInfo.name}</Title>
      <Price>{itemInfo.price}</Price>
      <StyledIconFontAwesome icon={faStar} isFavorite={favorite} onClick={() => { if(!favorite) setShowFavoritesModal(true) }}></StyledIconFontAwesome>
      <Button backgroundColor='#CC3333' onClick={() => { setShowCartModal(true) }} text='Add to cart'></Button>
      {showFavoritesModal && <FavoriteModal {...favoriteModalProps}></FavoriteModal>}
      {showCartModal && <CartModal {...cartModalProps}></CartModal>}
    </StyledListItem>
  );
}

ProductItem.propTypes = {
  itemInfo: PropTypes.object
};

const StyledListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: white;
  margin: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`
const Image = styled.img`
  width: 300px;
  height: 210px;
  border-radius: 10px;
`
const Title = styled.h3`
  width: 100%;
  font-weight: bold;
  margin: 10px;
  font-family: 'Roboto', sans-serif;
`
const Price = styled.p`
  font-size: 18px;  
  margin: 10px;
  font-family: 'Roboto', sans-serif;
`
const StyledIconFontAwesome = styled(FontAwesomeIcon)`
  position: absolute;
  right: 0;  
  font-size: 20px; 
  margin: 10px;
  cursor: pointer;
  color: ${props => props.isFavorite ? '#CC3333' : 'grey'};
`