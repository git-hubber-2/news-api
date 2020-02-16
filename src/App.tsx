import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
