import React from 'react';
import { render } from 'react-dom';
import Button from '../../src/Button/Button.js';
import CircleLoader from '../../src/CircleLoader/CircleLoader.js';
import Checkbox from '../../src/Checkbox/Checkbox.js';

const App = () => (
  <div>
    <CircleLoader color="red" />
    <Checkbox label="hello, checkbox!" />
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
