import './App.css';
import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import { Router, Link } from '@reach/router';
import Landing from './views/Landing';
import Portfolio from './views/Portfolio';
import Projects from './views/Projects';
import CodeSnippets from './views/CodeSnippets';
import Algorithms from './views/Algorithms';
import LoginRegistration from './views/LoginRegistration';
import TTT from './components/TTT';
import Dropdown from 'react-bootstrap/Dropdown'
import PortfolioForm from './components/PortfolioComponents/PortfolioForm';
import SinglePortfolio from './views/SinglePortfolio';
import NewProject from './components/ProjectComponents/NewProject';
import JQZDPG from './JQZDPG.gif';
import GameContainer from './components/SumGameComponents/Game';

function App() {

    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log('Is this running?');
        socket.on('Welcome', data => console.log(data));
        return () => socket.disconnect(true);
    }, []);
  
    return (
        <div className="App">
            <div className="header">
                <div className="headerDropdown">
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
                            <Dropdown.Item href="/ttt">Tic Tac Toe</Dropdown.Item>
                            <Dropdown.Item href="/sumgame">Sum Game</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="JQZLogo">
                    <img src={JQZDPG} alt=""/>
                </div>
                <div className="headerLink">
                    <button className="btn btn-primary pl-5 text-center pr-5 mr-3"><Link style={{color: "#f1d3bc"}} to="/login">Login/Register</Link></button>                    
                </div>
            </div>
            <Router>
                <Landing path="/" />
                <Portfolio path="/portfolio" />
                <Projects path="/projects" />
                <CodeSnippets path="/code" /> 
                <Algorithms path="/algorithms" /> 
                <LoginRegistration path="/login" />
                <PortfolioForm path="/portfolio/new" />
                <SinglePortfolio path="/portfolio/:id" />
                <NewProject path="/projects/new/:id" />
                <TTT path = "/ttt" />
                <GameContainer path = "/sumgame" />
            </Router>
        </div>
    );
}

export default App;
