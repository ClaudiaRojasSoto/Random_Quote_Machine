import React from 'react';
import './QuoteBox.css'

function QuoteBox({ quote, author }) {
  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author" className="author-text">{author}</p>
    </div>
  );
}

export default QuoteBox;
