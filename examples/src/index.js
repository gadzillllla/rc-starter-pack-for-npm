import React from 'react';
import { render } from 'react-dom';
import Button from '../../src/Button/Button.js';
import CircleLoader from '../../src/CircleLoader/CircleLoader.js';
import Checkbox from '../../src/Checkbox/Checkbox.js';
import DownloadButton from '../../src/DownloadButton/DownloadButton.js';
import Radio from '../../src/Radio/Radio.js';
import ExampleForm from '../../src/ExampleForm/ExampleForm.js';

const App = () => (
  <div>
    <ExampleForm />
    <Radio name="form" id="radio1" label="Option 1" />
    <Radio name="form" id="radio2" label="Option 2" />
    <Radio name="form" id="radio3" label="Option 3" />
    <Radio name="form" id="radio5" color="red" label="I`m RED!" />
    <Radio name="form" disabled id="radio4" label="Disabled" />

    <DownloadButton format="CSV" />
    <DownloadButton inProgress />
    <DownloadButton done />
    <CircleLoader color="red" />
    <Checkbox label="hello, checkbox!" />
    <Button />
  </div>
);

render(<App />, document.getElementById('root'));
