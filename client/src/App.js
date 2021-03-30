import './App.css';
import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import { Router } from '@reach/router';
import Landing from './views/Landing';
import Portfolio from './views/Portfolio';
import CodeSnippets from './views/CodeSnippets';
import Algorithms from './views/Algorithms';
import LoginRegistration from './views/LoginRegistration';
import TTT from './components/TTT';
function App() {

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {

    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));

    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <Router>
        <Landing path="/" />
        <Portfolio path="/portfolio" />
        <CodeSnippets path="/code" /> 
        <Algorithms path="/algorithms" /> 
        <LoginRegistration path="/login" />
        <TTT path = "/ttt" />
      </Router>
    </div>
  );
}

export default App;
