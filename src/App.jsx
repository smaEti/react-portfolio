import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
import About from './components/About';
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
      <div id="home"className="dark:bg-gray-900 font-Poppins ">
        <Header
          mode={darkToggle}
          darkToggle={() => {
            darkToggle ? setDarkToggle(false) : setDarkToggle(true);
          }}
        />
        <Hero />
        <About />
        <Social />
      </div>
  );
}
//TODO: components
//header (kinda done)
//hero (kinda done)
//about
//skills
//projects
//expriences / education
//contact me
//footer
//sites (absolute and z-indexed)

export default App;
