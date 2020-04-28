import React from 'react';
import './App.css';
import Quiz from "./Quiz";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import ResultPage from "./resultPage";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path={"/result"} component={ResultPage}/>
                        <Route path={"/"} component={Quiz}/>
                    </Switch>
                </header>
            </div>

        </Router>

    );
}

export default App;
