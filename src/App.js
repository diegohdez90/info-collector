import React from 'react';
import Route from './components/Route';
import Register from './containers/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Route path='/register'>
        <Register />
      </Route>
    </div>);
}

export default App;
