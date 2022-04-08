import './App.css';
import Navigation from './Navigation';
import { useState } from 'react';
import Body from './Body/Body';
import { pages } from './Navigation';
import Hero from './Hero/Hero'

function App() {
  //leaving this here so that I can avoid having all elements rendered at the same time

  //ideally, each element will be added to the viewport on click.  After it has been rendered, the link will then scroll
  //down to reveal the newly rendered content.  
  // const [viewport, setViewport] = useState()

  const [current, setCurrent] = useState(pages.contact);

  return (
    <>
    <Navigation onNavigate={setCurrent} />
    <Hero />
    <Body currentPage={current} />
    </>
  );
}



export default App;
