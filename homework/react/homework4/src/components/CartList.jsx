import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductCard } from './ProductCard';

export const CartList = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // could be an API call to get_cart endpoint
    async function fetchCart() {
      const res = await fetch("http://localhost:3000/MOCK_DATA.json");
      res
        .json()
        .then(res => {
          const cartStorage = localStorage.getItem('cart');
          if (cartStorage) {
            const cartIds = cartStorage.split(',').map(item => Number(item));
            setCart(res.products.filter(item => cartIds.includes(item.id)));
          }          
        })
        .catch(err => console.log(err));
    }
    fetchCart();
  }, []);

  const removeItem = (id) => {
    //could be an API call to remove_from_cart endpoint
    setCart(cart.filter(item => item.id !== id));
    const cartArray = localStorage.getItem('cart').split(',');
    localStorage.setItem('cart', cartArray.filter(item => Number(item) !== id).join(','));
  }

  return (
    <StyledList>
      {cart.map(item => <ProductCard key={item.id} isInCart={true} productInfo={item} hasRemoveCartButton={true} cartHandler={removeItem}></ProductCard>)}
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