import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Fibonaaci from "./Fibonacci"
import Otherpage from "./Otherpage"
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Link to="/">Home</Link>
       <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fibonaaci}></Route>
        <Route path="/otherpage" exact component={Otherpage}></Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
