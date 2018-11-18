import React, { Component } from 'react';
import { isEmpty } from 'ramda';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

const rootStyle = css`
  display: inline-block;
  position: relative;
`;

const rippleContainer = css`
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  & span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: #fff;
    animation: ripple 1000ms forwards;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export default (rippleColor = '#fff') => EnhancedComponent =>
  class extends Component {
    state = {
      ripple: {}
    };

    getRipple = ripple => {
      if (isEmpty(ripple)) return null;
      const { x, y, size } = ripple;
      return (
        <span
          key={`${x},${y}`}
          style={{
            top: y,
            left: x,
            height: size,
            width: size,
            backgroundColor: rippleColor
          }}
        />
      );
    };

    handleMouseDown = e => {
      e.preventDefault();
      this.addRipple(e);
    };

    addRipple = e => {
      const position = this.buttonNode.getBoundingClientRect();
      const size = this.buttonNode.offsetWidth;
      const x = e.pageX - position.left - size / 2;
      const y = e.pageY - position.top - size / 2;
      this.removeRipples(() => {
        this.setState({ ripple: { x, y, size } });
      });
    };

    removeRipples = cb => {
      this.setState({ ripple: {} }, cb);
    };
    render() {
      const { style, ...restProps } = this.props;
      return (
        <div
          className={rootStyle}
          ref={node => {
            this.buttonNode = node;
          }}
          style={style}
          onMouseDown={this.handleMouseDown}
          role="button"
          tabIndex={-1}
        >
          <EnhancedComponent {...restProps} />
          <div className={rippleContainer}>
            {this.getRipple(this.state.ripple)}
          </div>
        </div>
      );
    }
  };
