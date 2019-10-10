import React from 'react';
import {Route} from "react-router-dom";

import {HomePage} from "../components/HomePage";

import {PATHS} from "./PATHS";

function AppRouter() {
  return [
    <Route path={PATHS.MAIN} exact component={HomePage} key={"homepage"}/>
  ];
}

export default AppRouter;