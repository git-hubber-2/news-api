import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

type HeaderProps = {
  setFilter: (value: string) => void;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  setFilter,
}): JSX.Element => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>News API</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Form.Control
          type='text'
          placeholder='Filter Source'
          className='mr-sm-2'
          onChange={(x: React.FormEvent<FormControl & HTMLInputElement>) => {
            setFilter(x.currentTarget.value);
          }}
        />
        <Form.Text className='text-muted'>eg: techcrunch</Form.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
