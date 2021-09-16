import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Input({ name, label, type }) {
  return (
    <div>
      <label htmlFor={ name }>{label}</label>
      <input id={ name } type={ type } name={ name } />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['input', 'password']),
};

Input.defaultProps = {
  label: null,
  type: 'text',
};

export default Input;
