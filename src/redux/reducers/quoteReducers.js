const initialState = { text: '', author: '' };

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUOTE':
      return action.payload;
    default:
      return state;
  }
};

export default quoteReducer;
