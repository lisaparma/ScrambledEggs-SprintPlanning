import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import AppRouter from "./routing/AppRouter";
import matesReducer from "./store/reducers/matesReducer";
import initialStore from "./store/initialStore";

function App() {

  const store = createStore(
    matesReducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
