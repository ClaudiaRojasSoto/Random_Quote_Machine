import React from 'react';
import PropTypes from 'prop-types';
import './QuoteBox.css';

function QuoteBox({ quote, author }) {
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author" className="author-text">{author}</p>
    </div>
  );
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteBox;
