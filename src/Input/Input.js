import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as s from './styles.js';
import colors from '../lib';
import { always, ifElse, isEmpty, not } from 'ramda';

const SvgEye = ({ color }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill={color}
        fillRule="nonzero"
        d="M9.377 11.495a1.5 1.5 0 1 0 1.65-2.4 3 3 0 1 1-1.65 2.4zM12.5 4c5.227 0 9.691 3.304 11.5 7.969-1.809 4.664-6.273 7.969-11.5 7.969S2.809 16.633 1 11.968C2.809 7.305 7.273 4 12.5 4zm-9.22 7.969c1.724 3.57 5.29 5.844 9.22 5.844 3.93 0 7.496-2.274 9.22-5.844-1.724-3.57-5.29-5.844-9.22-5.844-3.93 0-7.496 2.274-9.22 5.844z"
      />
    </g>
  </svg>
);

const SvgCorrect = ({ color }) => (
  <svg width="24px" height="24px" viewBox="0 0 18 18">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <path
        fill={color}
        d="M7 14L2 9.202l1.41-1.354L7 11.284 14.59 4 16 5.363z"
      />
    </g>
  </svg>
);

const Input = class extends React.Component {
  state = {
    showPass: false,
    currentType: this.props.type
  };

  showPass = () => {
    this.setState({
      showPass: true,
      currentType: 'text'
    });
  };

  hidePass = () => {
    this.setState({
      showPass: false,
      currentType: this.props.type
    });
  };

  handleShowPassClick = () => {
    ifElse(always(this.state.showPass), this.hidePass, this.showPass)();
  };

  renderShowPassButton() {
    const { type, passwordTip, color } = this.props;
    const { showPass } = this.state;
    const currentEyeColor = showPass ? color : '#848484';
    if (type === 'password' && passwordTip) {
      const buttonStyles = classnames(s.showPass, {
        [s.showPassActive]: this.state.showPass
      });
      return (
        <button
          className={buttonStyles}
          type="button"
          onClick={this.handleShowPassClick}
        >
          <SvgEye color={currentEyeColor} />
        </button>
      );
    }
    return null;
  }

  renderCorrectIcon = () => {
    const { correct, color } = this.props;
    if (not(correct)) return null;
    return (
      <div className={s.correct}>
        <SvgCorrect color={color} />
      </div>
    );
  };

  render() {
    const { currentType } = this.state;
    const {
      name,
      value,
      onChange,
      placeholder,
      error,
      disabled,
      readOnly,
      autoFocus,
      color
    } = this.props;

    const isFieldEmpty = isEmpty(value);
    const containerStyles = classnames(s.containerStyle, {
      [s.hasError]: error,
      animated: error,
      shake: error,
      [s.disabled]: disabled,
      [s.readOnly]: readOnly
    });

    const inputStyles = classnames(s.inputStyles, {
      [s.empty]: isFieldEmpty
    });

    const labelStyles = classnames(s.labelStyles, {
      [s.notEmpty]: !isFieldEmpty
    });

    return (
      <div className={s.rootStyle}>
        <div className={containerStyles}>
          <input
            disabled={disabled}
            autoFocus={autoFocus}
            className={inputStyles}
            type={currentType}
            readOnly={readOnly}
            onChange={onChange}
            value={value}
          />
          <label htmlFor={name} className={labelStyles}>
            {placeholder}
          </label>
          <span className={s.hrStyle(color)} />
          {this.renderShowPassButton()}
          {this.renderCorrectIcon()}
        </div>
        <span className={s.error}>{error}</span>
      </div>
    );
  }
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  passwordTip: PropTypes.bool,
  correct: PropTypes.bool,
  color: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
  passwordTip: false,
  correct: false,
  autoFocus: false,
  color: colors.yalBlue
};

export default Input;
