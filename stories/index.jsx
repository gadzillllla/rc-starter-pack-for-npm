import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import Button from '../src/Button/Button.js';
import CircleLoader from '../src/CircleLoader/CircleLoader.js';
import Checkbox from '../src/Checkbox/Checkbox.js';
import DownloadButton from '../src/DownloadButton/DownloadButton.js';
import Radio from '../src/Radio/Radio.js';
import ExampleForm from '../src/ExampleForm/ExampleForm.js';

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

storiesOf('Radio', module)
  .addDecorator(
    withStorySource(`
    <Radio name="form" id="radio1" label="Option 1" />
    <Radio name="form" id="radio2" label="Option 2" />
    <Radio name="form" id="radio3" label="Option 3" />
    <Radio name="form" id="radio5" color="red" label="I'm RED!" />
    <Radio name="form" disabled id="radio4" label="Disabled" />
      `)
  )
  .add('default', () => (
    <div>
      <Radio name="form" id="radio1" label="Option 1" />
      <Radio name="form" id="radio2" label="Option 2" />
      <Radio name="form" id="radio3" label="Option 3" />
      <Radio name="form" id="radio5" color="red" label="I'm RED!" />
      <Radio name="form" disabled id="radio4" label="Disabled" />
    </div>
  ));

storiesOf('Input', module)
  .addDecorator(
    withStorySource(`
    class ExampleForm extends React.Component {
      state = {
        login: { value: '', error: '' },
        password: { value: '', error: '' },
        invalidForm: true
      };
    
      handleChangeLogin = e =>
        this.setState({
          login: { value: e.target.value, error: '' },
          invalidForm: true
        });
      handleChangePass = e =>
        this.setState({
          password: { value: e.target.value, error: '' },
          invalidForm: true
        });
    
      validate = () => {
        const { login, password, invalidForm } = this.state;
        const loginError =
          login.value.length < 5 ? 'слишком мало символов (минимум 5)' : '';
        const passwordError =
          password.value.length < 5 ? 'слишком мало символов (минимум 5)' : '';
        this.setState(
          {
            login: {
              value: this.state.login.value,
              error: loginError
            },
            password: {
              value: this.state.password.value,
              error: passwordError
            },
            invalidForm: !!loginError || !!passwordError
          },
          invalidForm
            ? console.log(invalidForm, 'форма не прошла валидацию')
            : console.log(invalidForm, 'форма отправлена', {
                login: login,
                password: password,
                invalid: invalidForm
              })
        );
      };
    
      render() {
        const { color } = this.props;
        return (
          <div>
            <form
              className={css'
                width: 400px;
              '}
            >
              <Input
                name="login"
                type="text"
                color={color}
                placeholder="login"
                onChange={this.handleChangeLogin}
                value={this.state.login.value}
                error={this.state.login.error}
                correct={!this.state.invalidForm}
              />
              <Input
                name="password"
                type="password"
                placeholder="password"
                passwordTip
                color={color}
                onChange={this.handleChangePass}
                value={this.state.password.value}
                error={this.state.password.error}
                correct={!this.state.invalidForm}
              />
            </form>
            <Button customColor={color} onClick={this.validate}>
              SUBMIT
            </Button>
          </div>
        );
      }
    }
      `)
  )
  .add('default', () => <ExampleForm />)
  .add('custom color', () => (
    <div>
      <ExampleForm color="pink" />
      <ExampleForm color="green" />
      <ExampleForm color="brown" />
      <ExampleForm color="purple" />
    </div>
  ));
