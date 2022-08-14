// Import data
import {postings} from './postings'
// Import components
import './App.css';
import React from 'react';
import Gallery from './Components/Gallery';
import Directory from './Components/Directory';
import Searchbar from './Components/Searchbar';
import Sidebar from './Components/Sidebar';

function App(){
  return (
    <div>
      <h1>maryslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory/>
        <Sidebar/>
        <Gallery postings={postings}/>
      </div>
    </div>
  );
}

export default App;