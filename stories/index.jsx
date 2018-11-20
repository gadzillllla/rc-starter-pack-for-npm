import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import MyComponent from '../src';
import Button from '../src/Button/Button.js';
import CircleLoader from '../src/CircleLoader/CircleLoader.js';
import Checkbox from '../src/Checkbox/Checkbox.js';
import DownloadButton from '../src/DownloadButton/DownloadButton.js';

const gradient =
  'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';

storiesOf('Button', module)
  .addDecorator(
    withStorySource(
      `<Button>DEFAULT</Button>; 
<Button disabled>DISABLED</Button>
<Button danger>DANGER</Button>
<Button inverted>INVERTED</Button>
<Button ghost>GHOST</Button>
<Button pseudoLink>PSEUDO LINK</Button>
<Button splash>SPLASH</Button>
<Button customColor={'green'}>CUSTOM COLOR</Button>
<Button customColor={'#505da2'} customBackground={gradient} splash>CUSTOM BG</Button>

const gradient =
'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';`
    )
  )
  .add('default', () => <Button>DEFAULT</Button>)
  .add('disabled', () => <Button disabled>DISABLED</Button>)
  .add('danger', () => <Button danger>DANGER</Button>)
  .add('inverted', () => <Button inverted>INVERTED</Button>)
  .add('ghost', () => <Button ghost>GHOST</Button>)
  .add('pseudo link', () => <Button pseudoLink>PSEUDO LINK</Button>)
  .add('splash', () => <Button splash>SPLASH</Button>)
  .add('custom color', () => (
    <Button customColor={'green'}>CUSTOM COLOR</Button>
  ))
  .add('custom background', () => (
    <Button customColor={'#505da2'} customBackground={gradient} splash>
      CUSTOM BG
    </Button>
  ));

storiesOf('Circle loader', module)
  .addDecorator(
    withStorySource(`
    <CircleLoader />
    <CircleLoader iverted/>
    <CircleLoader color="red" />
      `)
  )
  .add('default', () => <CircleLoader />)
  .add('custom color', () => <CircleLoader color="red" />);

storiesOf('Checkbox', module)
  .addDecorator(
    withStorySource(`
    <Checkbox label="hello, checkbox!" />
    <Checkbox label="hello, custom color checkbox! color="red" />
      `)
  )
  .add('default', () => <Checkbox label="hello, checkbox!" />)
  .add('custom color', () => (
    <Checkbox label="hello, custom color checkbox!" color="red" />
  ));

storiesOf('Download Button', module)
  .addDecorator(
    withStorySource(`
    <DownloadButton />
    <DownloadButton color="red" format="PDF" />

    <DownloadButton inProgress />
    <DownloadButton format="PDF" done />
      `)
  )
  .add('default', () => (
    <div>
      <DownloadButton />
      <DownloadButton color="red" format="PDF" />
    </div>
  ))
  .add('in progress', () => <DownloadButton inProgress />)
  .add('done', () => <DownloadButton done />);
