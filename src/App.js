import React, {Fragment} from 'react';
import Main from "./components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Main/>
      </Fragment>
    </Router>
  );
}

export default App;
