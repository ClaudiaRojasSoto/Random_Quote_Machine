import React from 'react';
import './QuoteButton.css'

function QuoteButton({ onClick }) {
  return (
    <button id="new-quote" onClick={onClick}>Nueva Cita</button>
  );
}

export default QuoteButton;
