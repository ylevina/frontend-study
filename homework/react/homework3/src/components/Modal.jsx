import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Modal = ({ id, closeButton, handleClose, header, text, actions }) => {

  const handleModalClick = e => {
    if (e.target.id === id) {
      handleClose();
    }
  };

  return (
    <Container id={id} onClick={handleModalClick}>
      <Content>
        <Header>
          <Heading>{header}</Heading>
          {closeButton && <CloseButton onClick={handleClose}>&times;</CloseButton>}
        </Header>
        <Main>
          <Message>{text}</Message>
          <Actions>
            {actions}
          </Actions>
        </Main>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  id: PropTypes.string,
  closeButton: PropTypes.bool,
  handleClose: PropTypes.func,
  header: PropTypes.string,
  text: PropTypes.string,
  actions: PropTypes.element
};

Modal.defaultProps = {
  id: 'modal-default',
  closeButton: true,
  header: 'Please, confirm the action',
  text: 'Are you sure you want to proceed?'  
};

const Container = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: #312e2e9d;   
`

const Content = styled.div` 
  color: white;
  max-width: 520px; 
  margin: 15% auto;
`

const Header = styled.div`  
  background-color: #D44637;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 30px;  
  border-radius: 10px 10px 0 0; 
`

const Heading = styled.h2` 
 font-weight: normal;  
`

const CloseButton = styled.span`  
  font-size: 45px; 
  cursor: pointer;
`

const Main = styled.div`  
  background: #E74C3C;
  font-size: 20px;  
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  border-radius: 0 0 10px 10px; 
`

const Message = styled.p`  
  max-width: 470px;
  text-align: center;
  font-size: 16px;
  margin-top: 2em;
`

const Actions = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-around; 
  margin: 1em 0;
  width: 50%;
`