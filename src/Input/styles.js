import { css } from 'react-emotion';
import colors from '../lib';

export const rootStyle = css`
  margin-bottom: 20px;
`;

export const containerStyle = css`
  min-height: 34px;
  position: relative;
`;

export const labelStyles = css`
  left: 0;
  top: 35%;
  position: absolute;
  pointer-events: none;
  color: #848484;
  transform-origin: left top 0;
  ${'' /* transform: scale(0.7) translateY(-220%); */}
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
`;
export const hasError = css`
  color: ${colors.carminePink} !important;
  animation: shake 0.5s 1 linear;

  @keyframes shake {
    0% {
      -webkit-transform: translate(15px);
    }
    20% {
      -webkit-transform: translate(-15px);
    }
    40% {
      -webkit-transform: translate(10px);
    }
    60% {
      -webkit-transform: translate(-10px);
    }
    80% {
      -webkit-transform: translate(5px);
    }
    100% {
      -webkit-transform: translate(0px);
    }
  }

  & input {
    border-color: red !important;
  }
  & input:focus ~ span {
    background-color: red;
  }
  & span {
    color: red !important;
  }
`;

export const error = css`
  color: red;
  font-size: 10px;
`;

export const notEmpty = css`
  transform: scale(0.7) translateY(-150%);
`;

export const empty = css`
  & + label {
    transform: translateY(-50%);
  }
`;

export const hrStyle = color => css`
  margin: 0;
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${color};
  position: relative;
  top: -1px;
  transform: scaleX(0) translateZ(0);
  transform-origin: left top;
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
`;

export const inputStyles = css`
  border: 0;
  height: 34px;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  color: #101010;
  -webkit-text-fill-color: #101010;
  background-color: transparent;
  padding-left: 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    transform: scale(0.7) translateY(-150%);
  }

  &:focus ~ span {
    transform: scaleX(1) translateZ(0);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const readOnly = css` 
    color: ${colors.battleshipGrey};

    &:focus {
      outline: none;
      border-bottom: 1px solid #e0e0e0;
    }

    &:focus ~ .hr {
      transform: scaleX(0) translateZ(0);
    }
  }
  `;

export const disabled = css`
      border-bottom: 1px solid transparent;
      cursor: not-allowed;
      color: #101010;
      opacity: 1;
  
      &:focus ~ span {
        transform: scaleX(0) translateZ(0);
      }
    }
    `;

export const showPass = css`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  outline: none;
  background-color: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: background 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    opacity: 0.7;
  }
`;

export const correct = css`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
`;
