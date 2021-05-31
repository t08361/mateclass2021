//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Detail, Check, Settings, Challenge } from "./somethingscd ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Header">
        <Link to="/settings"><h1>설정</h1></Link><Link to="/detail"><h1> 나</h1></Link>
      </div>
      <div className="Body">
        <Link to="/check"><h1>출석체크</h1></Link>
        <Link to="/5challenge"><h1>하루 5일 챌린지</h1></Link>
      </div>
      <div className="Tail">
      </div>
        <Switch>
          <Route path="/" exact> </Route>
          <Route path="/settings" component={Settings}> </Route>
          <Route path="/detail" component={Detail}> </Route>
          <Route path="/check" component={Check}> </Route>
          <Route path="/5challenge" component={Challenge}> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
