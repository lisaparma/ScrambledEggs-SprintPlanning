import { combineReducers, createStore } from 'redux'

import matesReducer from "./reducers/matesReducer";
import infoReducer from "./reducers/infoReducer";
import groupsReducer from "./reducers/groupsReducer";
import initialStore from "./initialStore";


export function createPlanningStore() {

  const reducers = combineReducers({
    info: infoReducer,
    mates: matesReducer,
    groups: groupsReducer
  });

  return createStore(
    reducers,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}