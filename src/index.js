import React from 'react';
import './styles.css';
import Button from './Button/Button.js';
import CircleLoader from './CircleLoader/CircleLoader.js';
const MyComponent = () => (
  <h1>
    <Button />
    <CircleLoader />
    Hello from My Component
  </h1>
);
export default MyComponent;
