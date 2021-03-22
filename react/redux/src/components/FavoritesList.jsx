import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  products: selectProductList(state),
  favoriteProducts: selectFavoriteIds(state),
  cartProducts: selectFavoriteIds(state)
});

export const FavoritesList = connect(mapStateToProps)() => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //could be an API call to get_cart endpoint
    async function fetchCart() {
      const res = await fetch("http://localhost:3000/MOCK_DATA.json");
      res
        .json()
        .then(res => {
          const favoritesStorage = localStorage.getItem('favorites');
          if (favoritesStorage) {
            const favoritesIds = favoritesStorage.split(',').map(item => Number(item));
            setFavorites(res.products.filter(item => favoritesIds.includes(item.id)));
          }
        })
        .catch(err => console.log(err));
    }
    fetchCart();
  }, []);

  const removeItem = (id) => {
    //could be an API call to remove_from_cart endpoint
    setFavorites(favorites.filter(item => item.id !== id));
    const favoritesArray = localStorage.getItem('favorites').split(',');
    localStorage.setItem('favorites', favoritesArray.filter(item => Number(item) !== id));
  }

  const addToCart = (id) => {
    const cartString = localStorage.getItem('cart');
    if (cartString) {   
      localStorage.setItem('cart', [...cartString.split(','), id]);
    }
    else {
      localStorage.setItem('cart', id);
    }
  }

  return (
    <StyledList>
      {favorites.map(item => <ProductCard key={item.id} isFavorite={true} productInfo={item} hasAddCartButton={true} cartHandler={addToCart} hasFavoriteButton={true} favoriteButtonHandler={removeItem}></ProductCard>)}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
`