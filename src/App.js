import React from 'react'
import './App.css';
import { BrowserRouter, BrowserRouter as Router,Redirect, Switch ,Route,Link,useParams,useRouteMatch} from 'react-router-dom';
import {Topics} from './components/Topics'
import {About } from './components/About'
import {NotFound} from './components/NotFound'
import {Topic} from './components/Topic'

function App() {

  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    }
  };

  return (
    <BrowserRouter>
<div className="App">
   <h1>React Router Nested Demo</h1>
   <div className="navbar">
   <Link to="/">Home</Link>
   <Link to="/topics">Topics</Link>
   <Link to="/about">About</Link>
   </div>
  
   
   <Switch>
     <Route exact path="/">
       <h2><p>Welcome to the Home Component</p></h2>
       
     </Route>
     <Route path="/topics">
    <Topics shoes={shoes}/>
     </Route>
     <Route path="/about">
       <About />
     </Route>
     <Route path="/topic/:slug"><Topic shoes={shoes}/></Route>
     <Route path="*"><NotFound /></Route>
   </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
