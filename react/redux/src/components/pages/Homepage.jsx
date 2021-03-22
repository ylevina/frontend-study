import React from 'react';
import styled from 'styled-components';

import { ProductList } from '../ProductList';
import { SectionHeading } from '../SectionHeading';

export const Homepage = () => {
  return (
    <HomepageContainer>
      <ProductListWrapper>
        <SectionHeading text={'Homepage'}></SectionHeading>
        <ProductList />
      </ProductListWrapper>
    </HomepageContainer>
  );
}

const HomepageContainer = styled.div`  
  background-color: #F0F0F0;
  padding: 60px 0;
`

const ProductListWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`