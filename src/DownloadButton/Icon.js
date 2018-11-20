import React from 'react';
import PropTypes from 'prop-types';

const style = { marginRight: '5px' };

const Icon = ({ inProgress, done, color }) => {
  if (done)
    return (
      <svg style={style} width="24px" height="24px" viewBox="0 0 24 24">
        <g strokeWidth={2} stroke={color} fill="none" fillRule="evenodd">
          <path d="M7 12l3 3 6-6" strokeLinecap="round" />
          <circle cx={12} cy={12} r={11} />
        </g>
      </svg>
    );
  if (inProgress)
    return (
      <svg style={style} width="24px" height="24px" viewBox="0 0 24 24">
        <g
          transform="translate(1 1)"
          strokeWidth={2}
          stroke="#848484"
          fill="none"
          fillRule="evenodd"
        >
          <path d="M17 11H5" strokeLinecap="round" />
          <circle cx={11} cy={11} r={11} />
        </g>
      </svg>
    );
  return (
    <svg style={style} width="24px" height="24px" viewBox="0 0 24 24">
      <g transform="rotate(180 12 12)" fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <rect fill={color} x={5} y={3} width={14} height={2} rx={1} />
        <path
          d="M12.999 20.001V10.83l3.303 3.448a.975.975 0 0 0 1.409 0 1 1 0 0 0 .007-1.402L12 7l-5.717 5.883a1 1 0 0 0 .01 1.404.977.977 0 0 0 1.387.009L11 10.83v9.171a.999.999 0 0 0 1.999 0z"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string.isRequired
};

export default Icon;
