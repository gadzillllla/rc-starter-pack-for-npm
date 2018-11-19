import React from 'react';
import { render } from 'react-dom';
import Button from '../../src/Button/Button.js';
import CircleLoader from '../../src/CircleLoader/CircleLoader.js';

const App = () => (
  <div>
    <CircleLoader color="red" />
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
