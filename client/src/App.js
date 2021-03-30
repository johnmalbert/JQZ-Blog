import './App.css';
import { Router } from '@reach/router';
import Landing from './views/Landing';
import PortfolioView from './views/PortfolioView';
import CodeSnippets from './views/CodeSnippets';
import Algorithms from './views/Algorithms';
import LoginRegistration from './views/LoginRegistration';
import TTT from './components/TTT';
function App() {
  return (
    <div className="App">
      <Router>
        <Landing path="/" />
        <PortfolioView path="/portfolio" />
        <CodeSnippets path="/code" /> 
        <Algorithms path="/algorithms" /> 
        <LoginRegistration path="/login" />
        <TTT path = "/ttt" />
      </Router>
    </div>
  );
}

export default App;
