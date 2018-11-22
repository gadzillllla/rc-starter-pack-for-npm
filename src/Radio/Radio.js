import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import colors from '../lib';

const Radio = ({ label, color, name, disabled, id }) => {
  const radio = css`
    margin: 0.5rem;
    & input[type='radio'] {
      position: absolute;
      opacity: 0;
    }
    & input[type='radio'] + label:before {
      content: '';
      background: #f4f4f4;
      border-radius: 100%;
      border: 1px solid ${color};
      display: inline-block;
      width: 1.4em;
      height: 1.4em;
      position: relative;
      top: -0.2em;
      margin-right: 1em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
    & input[type='radio']:checked + label:before {
      background-color: ${color};
      box-shadow: inset 0 0 0 4px #f4f4f4;
    }
    & input[type='radio']:focus + label:before {
      outline: none;
      border-color: ${color};
    }
    & input[type='radio']:disabled + label:before {
      box-shadow: inset 0 0 0 4px #f4f4f4;
      border-color: #b4b4b4;
      background: #b4b4b4;
    }
    & input[type='radio'] + label:empty:before {
      margin-right: 0;
    }
  `;

  return (
    <div className={radio}>
      <input id={id} name={name} disabled={disabled} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string
};

Radio.defaultProps = {
  color: colors.yalBlue
};

export default Radio;
