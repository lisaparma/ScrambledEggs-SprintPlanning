import React from 'react';
import { Provider } from 'react-redux';
import { createPlanningStore } from "./store/createStore";
import HomePage from "./components/HomePage";

function App() {
  const store = createPlanningStore();
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
