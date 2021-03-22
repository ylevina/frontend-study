import React from 'react';
import styled from 'styled-components';

import { FavoritesList } from '../FavoritesList';
import { SectionHeading } from '../SectionHeading';

export const Favorites = () => {
  return (
    <FavoritesContainer>
      <ProductListWrapper>
        <SectionHeading text={'Favorites'}></SectionHeading>
        <FavoritesList />
      </ProductListWrapper>      
    </FavoritesContainer>
  );
}

const FavoritesContainer = styled.div`  
  background-color: #F0F0F0;
  padding: 60px 0;
`

const ProductListWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`