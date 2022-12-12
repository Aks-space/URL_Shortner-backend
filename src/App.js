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
      <h1>Make Short</h1>
      </div>
      <header className="App-header">
        <h1> Url-Shotner</h1> 
        <div className={'fo sideheadings'}>A smarter way to share and store your url</div>
        <UrlShort />
      </header>
      
    </div>   
  );
}

export default App;
