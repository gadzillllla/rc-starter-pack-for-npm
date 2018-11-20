import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import Icon from './Icon.js';
import colors from '../lib';

const DownloadButton = props => {
  const { onClick, inProgress, done, children, format, color } = props;

  const buttonStyle = css`
    border: none;
    cursor: pointer;
    min-height: 25px;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: black;
  
    &:hover {
      opacity: 0.7;
    }
  }`;

  const a = css`
    margin-right: 5px;
  `;

  return (
    <button
      disabled={inProgress || done}
      onClick={onClick}
      className={buttonStyle}
      data-type="download-csv-file"
    >
      <Icon className={a} inProgress={inProgress} done={done} color={color} />
      {children}
      {format}
    </button>
  );
};

DownloadButton.propTypes = {
  onClick: PropTypes.func,
  inProgress: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  format: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string
};

DownloadButton.defaultProps = {
  children: '',
  onClick: Function.prototype,
  inProgress: false,
  done: false,
  format: 'CSV',
  color: colors.yalBlue
};

export default DownloadButton;
