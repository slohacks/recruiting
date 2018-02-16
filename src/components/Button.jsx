import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = props => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      type="button"
      className={styles.Button}
    >
      { props.name }
    </button>
  </a>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
