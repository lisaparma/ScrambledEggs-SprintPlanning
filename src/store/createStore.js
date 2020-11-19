import { combineReducers, createStore } from 'redux'

import initialStore from "./initialStore";
import matesReducer from "./reducers/matesReducer";
import infoReducer from "./reducers/infoReducer";
import groupsReducer from "./reducers/groupsReducer";

export function createPlanningStore() {

  const reducers = combineReducers({
    info: infoReducer,
    mates: matesReducer,
    groups: groupsReducer
  });

  return createStore(
    reducers,
    initialStore
  );
}