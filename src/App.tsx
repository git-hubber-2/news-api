import React from 'react';
import Container from 'react-bootstrap/Container';

import Articles from './components/Articles';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FunctionComponent = (): JSX.Element => {
  const [articles, setArticles] = React.useState<articlesArray>([]);
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<string>('');
  // hello
  return (
    <div className='App'>
      <Container>
        <Header />
        <Articles />
      </Container>
    </div>
  );
};

export default App;
