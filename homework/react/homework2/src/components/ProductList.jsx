import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductItem } from './ProductItem';

export const ProductList = () => {
  const [data, setData] = useState({ products: [] });

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

  return (
    <StyledList>
      {data.products.map(item => (<ProductItem key={item.id} itemInfo={item}></ProductItem>))}
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
