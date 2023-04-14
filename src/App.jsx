import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Social from './components/Social';
function App() {
  //state for dark mode
  let [darkToggle, setDarkToggle] = useState(false);
  //refrence to a wrapper div that will hold the whole app
  let screenRef = useRef(null);
  useEffect(() => {
    //changing the theme when dark toggle state changes
    darkToggle
      ? screenRef?.current?.classList.add('dark')
      : screenRef?.current?.classList.remove('dark');
  }, [darkToggle]);
  return (
    <div ref={screenRef}>
      <div className="bg-gray-100/50 dark:bg-gray-900">
        <Header
          mode={darkToggle}
          darkToggle={() => {
            darkToggle ? setDarkToggle(false) : setDarkToggle(true);
            console.log('set dark toggle');
          }}
        />
        <Hero />
        <Social />
      </div>
    </div>
  );
}
//TODO: components
//header (kinda done)
//hero
//about
//tech stack
//projects
//expriences / education
//contact me
//footer
//sites (absolute and z-indexed)

export default App;
