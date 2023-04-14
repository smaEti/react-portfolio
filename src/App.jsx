import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
import About from './components/About';
import Skills from './components/Skills';
function App() {
  //state for dark mode
  let [darkToggle, setDarkToggle] = useState(false);
  //refrence to a wrapper div that will hold the whole app
  let screenRef = useRef(null);
  useEffect(() => {
    //changing the theme when dark toggle state changes
    darkToggle
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkToggle]);
  return (
      <div id="home"className="dark:bg-darkblack bg-slate-100/50 font-Poppins ">
        <Header
          mode={darkToggle}
          darkToggle={() => {
            darkToggle ? setDarkToggle(false) : setDarkToggle(true);
          }}
        />
        <Hero />
        <About />
        <Skills />
        <Social />
      </div>
  );
}
//TODO: components
//header (kinda done (pc))
//hero (kinda done (pc))
//about (kinda done (pc))
//skills (kinda done (pc))
//projects
//expriences / education
//contact me
//footer
//sites (absolute and z-indexed)

export default App;
