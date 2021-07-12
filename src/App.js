
import AOS from 'aos'
import "aos/dist/aos.css"
import React from 'react';
import { AboutMePage } from './components/AboutMePage'

AOS.init()

function App() {
  return (<AboutMePage></AboutMePage>);
}

export default App;
