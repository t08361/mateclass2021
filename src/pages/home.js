import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {Settings} from '../pages';

const Home = () => {
    return (
        <div>
            <h1>준쌤의 수학학원</h1>
            
        </div>
    );
};

export default Home;
/*<BrowserRouter>
                <Link to="/set"><button>세부설정</button></Link>
                <Switch>
                <Route path="/set" exact={true} component={Settings}/>
                </Switch>
            </BrowserRouter>*/