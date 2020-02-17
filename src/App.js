import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getNewDeck } from './redux/actions/deck';

import Main from './components/Main';

store.dispatch(getNewDeck());
window.store = store;
const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Main dispatch={store.dispatch} />
      </Provider>
    </div>
  );
}

export default App;
