import React from 'react';
import { Route, Switch } from "react-router-dom";
import Proptypes  from "prop-types";
import Dasboard from '../src/components/pages/dashboardPage'
import DetailPage from '../src/components/pages/detailPage'
import StatePage from '../src/components/pages/statePage'
import "semantic-ui-css/semantic.min.css"
const App = ({location}) => (

      <div className="ui container">
      <Switch>
        <Route location={location} path="/detail" exact component={DetailPage}/>
        <Route location={location} path="/" exact component={Dasboard}/>
        <Route location={location} path="/state" exact component={StatePage}/>
      </Switch>
      </div>
);
App.prototype = {
  location : Proptypes.shape({
    pathname: Proptypes.string.isRequired
  }).isRequired
}

export default App;
