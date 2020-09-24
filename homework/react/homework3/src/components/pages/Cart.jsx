import React from 'react';
import styled from 'styled-components';

import { CartList } from '../CartList';
import { SectionHeading } from '../SectionHeading';

export const Cart = () => {
  return (
    <CartContainer>
      <ProductListWrapper>
        <SectionHeading text={'Cart'}></SectionHeading>
        <CartList></CartList>
      </ProductListWrapper>
    </CartContainer>
  );
}

const CartContainer = styled.div`  
  background-color: #F0F0F0;
  padding: 60px 0;
`

const ProductListWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`