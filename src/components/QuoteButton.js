import React from 'react';
import PropTypes from 'prop-types';
import './QuoteButton.css';

function QuoteButton({ onClick }) {
  return (
    <button id="new-quote" type="button" onClick={onClick}>Nueva Cita</button>
  );
}

QuoteButton.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default QuoteButton;
