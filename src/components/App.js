import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Navigation from "./common/Navigation";

const App = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element,
};

export default connect()(App);
