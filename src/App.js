import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Hero from './Hero';
import Contact from './Contact';
import { useState } from 'react';

function App() {
  //leaving this here so that I can avoid having all elements rendered at the same time

  //ideally, each element will be added to the viewport on click.  After it has been rendered, the link will then scroll
  //down to reveal the newly rendered content.  
  // const [viewport, setViewport] = useState()

  return (
    <>
    <Navigation />
    <Hero />
    {/* <Recent />
    <Portfolio />
    <Blog />*/}
    <Contact />
    </>
  );
}

export default App;
