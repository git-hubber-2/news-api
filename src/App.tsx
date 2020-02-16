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
    const url = `http://newsapi.org/v2/top-headlines?country=au&apiKey=${apiKey}`;

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
  }, []);

  return (
    <div className='App'>
      <Container>
        <Header />
        {isLoaded && <Articles articles={articles} />}
      </Container>
    </div>
  );
};

export default App;
