//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Detail, Check, Settings, Challenge } from './somethings';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Header">
      <Link to="/"><h1>홈</h1></Link><Link to="/settings"><h1>설정</h1></Link><Link to="/detail"><h1> 나</h1></Link>
      </div>
      <div className="Body">
        <Link to="/check"><h1>출석체크</h1></Link>
        <Link to="/challenge"><h1>하루 5일 챌린지</h1></Link>
      </div>
      <div className="Tail">
        </div>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/settings" exact={true} component={Settings}/>
          <Route path="/detail" exact={true} component={Detail}/> 
          <Route path="/check" exact={true} component={Check}/>
          <Route path="/challenge" exact={true} component={Challenge}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  console.log("dfesf");
  return <div></div>;
}

export default App;
