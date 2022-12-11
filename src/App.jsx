import './App.css';
// import { useEffect } from 'react';
// import {flagAPI} from "./flagAPI.js";
import Head from './components/Head'
import Body from './components/Body';
import Foot from './components/Foot';
function App() {
  return (
    <div className="app">
        <Head />
        <Body />
        <Foot />
    </div>
  );
}

export default App;
