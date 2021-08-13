import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ReferenceUI from '@app/components/ReferenceUI/ReferenceUI';
import Component from '@app/components/Component/Component';

import './styles/App.scss';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <Component text="Hello cruel world!" {...props} />
            )}
            exact
          />
          <Route
            path="/reference/"
            render={(props) => <ReferenceUI {...props} />}
            exact
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
