import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Title } from './pages/title';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Title} />
    </BrowserRouter>
  );
}

export default App;
