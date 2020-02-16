import React from 'react';
import Container from 'react-bootstrap/Container';

import Articles from './components/Articles';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FunctionComponent = (): JSX.Element => {
  const [articles, setArticles] = React.useState<articlesArray>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<string>('');

  React.useEffect(() => {
    const apiKey = '96e7efbae84544aca2e40f5834bf2777';
    const url = filter
      ? `http://newsapi.org/v2/top-headlines?sources=${filter}&apiKey=${apiKey}`
      : `http://newsapi.org/v2/top-headlines?country=au&apiKey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          setArticles(result.articles);
          setIsLoaded(true);
        },

        error => {
          setArticles([]);
          setIsLoaded(false);
        }
      );
  }, [filter]);

  return (
    <div className='App'>
      <Container>
        <Header setFilter={setFilter} />
        {isLoaded &&
          (articles.length > 0 ? (
            <Articles articles={articles} />
          ) : (
            <>
              <h3>Nothing to see here...</h3>
              <p>
                Try changing the source filter (eg: techcrunch, abc-news-au,
                abc-news etc)
              </p>
            </>
          ))}
      </Container>
    </div>
  );
};

export default App;
