import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import colors from '../lib';

const Checkbox = ({ label, color, onClick, checked }) => {
  const cbx = css`
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;

    & span {
      display: inline-block;
      vertical-align: middle;
    }
    & span:first-child {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 0px;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid ${color};
      transition: all 0.2s ease;
    }
    & span:first-child svg {
      position: absolute;
      top: 4px;
      left: 3px;
      fill: none;
      stroke: #ffffff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 16px;
      stroke-dashoffset: 16px;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
      transform: translate3d(0, 0, 0);
    }
    & span:first-child:before {
      content: '';
      width: 100%;
      height: 100%;
      background: ${color};
      display: block;
      transform: scale(0);
      opacity: 1;
      border-radius: 50%;
    }
    & span:last-child {
      padding-left: 8px;
    }
    &:hover span:first-child {
      border-color: ${color};
    }
  `;

  const incCbx = css`
    &:checked + label span:first-child {
      background: ${color};
      border-color: ${color};
    }
    &:checked + label span:first-child {
      background: ${color};
      border-color: ${color};
    }
    &:checked + label span:first-child svg {
      stroke-dashoffset: 0;
    }
    &:checked + label span:first-child:before {
      transform: scale(3);
      opacity: 0;
      transition: all 0.6s ease;
    }
  `;

  return (
    <div onClick={onClick}>
      <input
        checked={checked}
        className={incCbx}
        id="cbx"
        type="checkbox"
        style={{ display: 'none' }}
      />
      <label className={cbx} htmlFor="cbx">
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  label: 'some text',
  color: colors.yalBlue
};

export default Checkbox;
