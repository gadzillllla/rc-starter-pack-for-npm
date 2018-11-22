import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js';
import colors from '../lib';

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
          className={css`
            width: 400px;
          `}
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

ExampleForm.propTypes = {
  color: PropTypes.string.isRequired
};

ExampleForm.defaultProps = {
  color: colors.yalBlue
};

export default ExampleForm;
