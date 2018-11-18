import React from 'react';
import PropTypes from 'prop-types';
import { btn } from './lib';
import { css } from 'react-emotion';
import withRipple from './Ripple.js';
import cn from 'classnames';

const Button = props => {
  const {
    customColor,
    customBackground,
    onClick,
    disabled,
    children,
    type,
    inverted,
    ghost,
    danger,
    pseudoLink,
    splash
  } = props;

  const defaultStyles = css`
    cursor: pointer;
    background: transparent;
    color: ${customColor || btn.main};
    border: 2px solid ${customColor || btn.main};
    font-size: 16px;
    line-height: 14px;
    padding: 0 10px;
    min-width: 170px;
    height: 50px;
    margin: 10px;
    transition: all 0.3s ${btn.osm};

    &:hover {
      background: ${customBackground || customColor || btn.main};
      color: ${btn.white};
    }

    &:focus,
    &:active {
      background: ${customBackground || customColor || btn.main};
      border: 2px solid ${customColor || btn.main};
      color: ${btn.white};
    }

    &:disabled {
      border: 2px solid ${btn.disabled};
      color: ${btn.disabled};
      background: transparent;

      &:hover {
        background: transparent;
      }
    }
  `;

  const dangerStyle = css`
    border-color: ${btn.danger};
    color: ${btn.danger};

    &:hover {
      background: ${btn.danger};
      color: ${btn.white};
    }
    &:focus,
    &:active {
      border-color: ${btn.danger};
    }
  `;

  const invertedStyle = css`
    background: ${customBackground || customColor || btn.main};
    color: ${btn.white};

    &:hover {
      color: ${customColor || btn.main};
      background: ${btn.white};
      border: 2px solid ${customColor || btn.main};
    }
  `;

  const ghostStyle = css`
  border: 2px solid ${customColor || btn.main};
  border-radius: 0;
  color: ${customColor || btn.main};
  background: transparent;

  &:hover {
    text-decoration: none;
    background: ${btn.ghost};
    border-color:  transparent;
    color: ${customColor || btn.main};
  }
  
  &:active {
    color: ${btn.white}
  }
}
`;

  const pseudoLinkStyles = css`
    border: 2px solid transparent;
    background: transparent;
    color: inherit;
    &:hover {
      text-decoration: underline;
      background: ${btn.ghost};
      border-color: transparent;
      color: ${customColor || btn.main};
    }
  `;

  const splashStyles = css`
    color: ${btn.white};
    background: ${customBackground || customColor || btn.main};
    padding: 0;

    &:disabled {
      cursor: default;
    }
  `;

  const styles = cn(defaultStyles, {
    [dangerStyle]: danger,
    [invertedStyle]: inverted,
    [ghostStyle]: ghost,
    [pseudoLinkStyles]: pseudoLink,
    [splashStyles]: splash
  });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  customColor: PropTypes.string,
  customBackground: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  inverted: PropTypes.bool,
  dataType: PropTypes.string,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  pseudoLink: PropTypes.bool,
  splash: PropTypes.bool
};

Button.defaultProps = {
  button: true,
  onClick: () => {},
  disabled: false,
  inverted: false,
  ghost: false,
  type: 'submit',
  danger: false,
  pseudoLink: false,
  splash: false
};

export default withRipple()(Button);
