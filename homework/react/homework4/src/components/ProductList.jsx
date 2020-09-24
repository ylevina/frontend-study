import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const [data, setData] = useState({ products: [] });
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/MOCK_DATA.json");
      res
        .json()
        .then(res => setData(res))
        .catch(err => console.log(err));
    }
    fetchData();
  }, []);

  useEffect(() => {
    const favoritesList = localStorage.getItem('favorites');
    if (favoritesList) setFavorites(favoritesList.split(',').map(item => Number(item)));
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
      {data.products.map(item => (<ProductCard key={item.id} isFavorite={favorites.includes(item.id)} productInfo={item} hasAddCartButton={true} cartHandler={addToCart} hasFavoriteButton={true} favoriteButtonHandler={toggleFavorites}></ProductCard>))}
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