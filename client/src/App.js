import './App.css';
import { Router, Link } from '@reach/router';
import Landing from './views/Landing';
import PortfolioView from './views/PortfolioView';
import CodeSnippets from './views/CodeSnippets';
import Algorithms from './views/Algorithms';
import LoginRegistration from './views/LoginRegistration';
import TTT from './components/TTT';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
    return (
        <div className="App">
            <div className="header">
                <Dropdown>
                    <Dropdown.Toggle>
                        JQZ Developer Playground
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Home</Dropdown.Item>
                        <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
                        <Dropdown.Item href="/projects">Projects</Dropdown.Item>
                        <Dropdown.Item href="/code">Snippets</Dropdown.Item>
                        <Dropdown.Item href="/algorithms">Algorithms</Dropdown.Item>
                        <Dropdown.Item href="/ttt">Fun</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to="/login">Login/Register</Link>
            </div>
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
