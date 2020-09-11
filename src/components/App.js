import React from 'react';
import TapControl from './TapControl';
import Header from './Header';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid>
      <Header />
      <TapControl />
    </Container>
  );
}

export default App;