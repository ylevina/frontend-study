import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectProductList, getProducts } from '../store/products';
import { selectFavorites, getFavorites } from '../store/favorites';
import { selectCart, getCart } from '../store/cart';
import { ProductCard } from './ProductCard';

const mapStateToProps = state => ({
  products: selectProductList(state),
  favorites: selectFavorites(state) 
});

export const ProductList = connect(mapStateToProps, { getProducts, getFavorites, getCart })(
  ({ products, favorites, getProducts, getFavorites, getCart }) => {

    useEffect(() => {
      getProducts(); 
      getFavorites();
      getCart();
    }, []);   

    const toggleFavorites = (id) => {
      if (favorites.includes(id)) {
        const filteredFavorites = favorites.filter(fav => fav !== id);
        localStorage.setItem('favorites', filteredFavorites);
        setFavorites(filteredFavorites);
      }
      else {
        localStorage.setItem('favorites', [...favorites, id]);
        setFavorites([...favorites, id]);
      }
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
        {products.map(item => (<ProductCard key={item.id} isFavorite={favorites.includes(item.id)} productInfo={item} hasAddCartButton={true} cartHandler={addToCart} hasFavoriteButton={true} favoriteButtonHandler={toggleFavorites}></ProductCard>))}
      </StyledList>
    );
  })

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
`