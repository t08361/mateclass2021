//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Detail, Check, Settings, Challenge, Home,ChallengeCheck } from './pages';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Header">
      <Link to="/"><button>홈</button></Link><Link to="/settings"><button>설정</button></Link><Link to="/detail"><button> 나</button></Link>
      <Link to="/check"><button>출석체크</button></Link>
          <Link to="/challenge"><button>하루 5일 챌린지</button></Link>
          <Link to="/challengeCheck"><button>하루 5일 챌린지(현황)</button></Link>
      </div>
      <div className="Tail">
        </div>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/settings" exact={true} component={Settings}/>
          <Route path="/detail" exact={true} component={Detail}/> 
          <Route path="/check" exact={true} component={Check}/>
          <Route path="/challenge" exact={true} component={Challenge} />
          <Route path="/challengeCheck" exact={true} component={ChallengeCheck}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
