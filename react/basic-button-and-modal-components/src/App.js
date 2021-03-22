import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from './components/Button';
import { Modal } from './components/Modal';

function App() {

  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const modalOneProps = {
    id: "modal-1",
    handleClose: () => { setShowModalOne(false) },
    header: "Do you want to delete this file?",
    text: "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?",
    closeButton: true,
    actions: <>
      <Button backgroundColor="#B3382C" text="Ok" onClick={() => { }}></Button>
      <Button backgroundColor="#B3382C" text="Cancel" onClick={() => { setShowModalOne(false) }}></Button>
    </>
  };

  const modalTwoProps = {
    id: "modal-2",
    handleClose: () => { setShowModalTwo(false) },
    header: "Coffee?",
    text: "We have plenty of choices.",
    closeButton: false,
    actions: <>
      <Button backgroundColor="#B3382C" text="Yes, please"></Button>
      <Button backgroundColor="#B3382C" text="No, thanks" onClick={() => { setShowModalTwo(false) }}></Button>
    </>
  };

  return (
    <div>
      <Container>
        <Button text="Open first modal" backgroundColor="#D44637" onClick={() => { setShowModalOne(true) }}></Button>
        <Button text="Open second modal" backgroundColor="navy" onClick={() => { setShowModalTwo(true) }}></Button>
      </Container>
      {showModalOne && <Modal { ...modalOneProps }></Modal>}
      {showModalTwo && <Modal { ...modalTwoProps }></Modal>}
    </div>

  );
}

const Container = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center; 
  margin: 100px;
`

export default App;
