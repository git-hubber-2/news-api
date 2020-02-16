import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type ArticlesProps = {
  articles: articlesArray;
};

const Articles: React.FunctionComponent<ArticlesProps> = ({
  articles,
}): JSX.Element => {
  return (
    <>
      {articles.map(({ title, author, content, url }, i) => {
        return (
          <Row
            key={title}
            style={
              i % 2 !== 0
                ? { backgroundColor: '#f8f9fa', margin: '1rem 0' }
                : { margin: '1rem 0' }
            }
          >
            <Col xs={3}>
              <a href={`${url}`} target='_blank' rel='noopener noreferrer'>
                {title}
              </a>{' '}
              {author && `by ${author} `}
            </Col>

            <Col>{content}</Col>
          </Row>
        );
      })}
    </>
  );
};

export default Articles;
