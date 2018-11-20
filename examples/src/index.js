import React from 'react';
import { render } from 'react-dom';
import Button from '../../src/Button/Button.js';
import CircleLoader from '../../src/CircleLoader/CircleLoader.js';
import Checkbox from '../../src/Checkbox/Checkbox.js';
import DownloadButton from '../../src/DownloadButton/DownloadButton.js';

const App = () => (
  <div>
    <DownloadButton format="CSV" />
    <DownloadButton inProgress />
    <DownloadButton done />
    <CircleLoader color="red" />
    <Checkbox label="hello, checkbox!" />
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
