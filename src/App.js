import { useEffect } from 'react';
import './App.css';
import UrlShort from './components/UrlShort';
function App() {
  useEffect(()=>{
    document.title='Url Shortner';
  },[]);
  return (
    <div className="App">
      <div className={'Headdiv'}>
      <h1>Url-Shotner</h1>
       <p> by team-c </p>

      </div>
      <header className="App-header">
        <div className={'fo sideheadings'}>A smarter way to share and store your url</div>
        <UrlShort />
      </header>
      
    </div>   
  );
}

export default App;
