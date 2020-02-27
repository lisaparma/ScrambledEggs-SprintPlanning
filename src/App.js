import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import AppRouter from "./routing/AppRouter";
import { createPlanningStore } from "./store/createStore";

function App() {
  const store = createPlanningStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
