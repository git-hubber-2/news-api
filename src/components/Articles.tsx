import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Articles: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Row style={{ margin: '1rem 0' }}>
        <Col xs={3}>
          <a
            href={`http://google.com`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Some Article
          </a>
        </Col>
        <Col xs={2}>Some Author</Col>
        <Col>Some Article Content</Col>
      </Row>
      <Row style={{ margin: '1rem 0' }}>
        <Col xs={3}>
          <a
            href={`http://google.com`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Some Article
          </a>
        </Col>
        <Col xs={2}>Some Author</Col>
        <Col>Some Article Content</Col>
      </Row>
    </>
  );
};

export default Articles;
