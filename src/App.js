import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setQuote } from './redux/actions/quoteActions';
import './App.css';
import QuoteBox from './components/QuoteBox';
import QuoteButton from './components/QuoteButton';

function App({ quote, setQuote }) {
  useEffect(() => {
      obtenerNuevaCita();
  }, []);

  const obtenerNuevaCita = async () => {
    const respuesta = await fetch("https://api.quotable.io/random");
    const datos = await respuesta.json();
    setQuote({ text: datos.content, author: datos.author });
};

  return (
    <div className="App">
        <div id="quote-box">
            <QuoteBox quote={quote.text} author={quote.author} />
            <div className="buttons-container">
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`} target="_blank" rel="noopener noreferrer">Twittear Cita</a>
                <button id="new-quote" onClick={obtenerNuevaCita}>Nueva Cita</button>
            </div>
        </div>
    </div>
  );
}

const mapStateToProps = state => ({
  quote: state
});

const mapDispatchToProps = {
  setQuote: setQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
