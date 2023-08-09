import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setQuote from './redux/actions/quoteActions';
import './App.css';
import './components/QuoteButton.css';
import QuoteBox from './components/QuoteBox';

function App({ quote, setQuote }) {
  const getNewQuote = useCallback(async () => {
    const response = await fetch('https://api.quotable.io/random');
    const datos = await response.json();
    setQuote({ text: datos.content, author: datos.author });
  }, [setQuote]);

  useEffect(() => {
    getNewQuote();
  }, [getNewQuote]);

  return (
    <div className="App">
      <div id="quote-box">
        <QuoteBox quote={quote.text} author={quote.author} />
        <div className="buttons-container">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
          <button type="button" id="new-quote" onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  setQuote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  quote: state.quote,
});

const mapDispatchToProps = {
  setQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
