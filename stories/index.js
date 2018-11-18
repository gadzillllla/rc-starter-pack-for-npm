import React from 'react';
import { storiesOf } from '@storybook/react';
import MyComponent from '../src';

storiesOf('Button', module).add('with text', () => <MyComponent />);
