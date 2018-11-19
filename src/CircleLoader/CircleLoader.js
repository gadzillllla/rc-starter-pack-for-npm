import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import colors from '../lib';
import { css } from 'react-emotion';

const CircleLoader = ({ inverted, color }) => {
  const loaderStyle = css`
    width: 32px;
    height: 32px;
    position: relative;

    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      height: 32px;
      width: 32px;

      &::before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        height: 32px;
        width: 32px;
        border: 2px solid ${color};
        border-radius: 50%;
        opacity: 0;
        animation: loader-6-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
      }
    }
    @keyframes loader-6-1 {
      0% {
        transform: translate3d(0, 0, 0) scale(0);
        opacity: 1;
      }

      100% {
        transform: translate3d(0, 0, 0) scale(1.5);
        opacity: 0;
      }
    }

    .loader span::after {
      animation: loader-6-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s
        infinite;
    }

    @keyframes loader-6-2 {
      0% {
        transform: translate3d(0, 0, 0) scale(0);
        opacity: 1;
      }

      100% {
        transform: translate3d(0, 0, 0) scale(1);
        opacity: 0;
      }
    }
  `;

  const invertedStyle = css`
    span::before,
    span::after {
      border: 2px solid #fff;
    }
  `;

  return (
    <div className={cn(loaderStyle, { [invertedStyle]: inverted })}>
      <span />
    </div>
  );
};

CircleLoader.propTypes = {
  inverted: PropTypes.bool,
  color: PropTypes.string
};

CircleLoader.defaultProps = {
  inverted: false,
  color: colors.yalBlue
};

export default CircleLoader;
