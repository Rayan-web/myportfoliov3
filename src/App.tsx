import React from 'react';
import './App.css';
import {Home } from './Pages/Home';
import { Op } from './Pages/Op';
import {Hello} from"./Pages/hello"

import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Contactme } from './Pages/Contactme';
import { createContext } from 'react';
import { useState } from 'react';
import { Navbar } from './components/Navbar';

interface AppContextInterface {
  theme: string;
  toggleTheme:()=>any;
}

export const ThemeApi=createContext<AppContextInterface | null >(null)
// export const ThemeApi=createContext({the})
function App() {
  const [theme,setTheme]=useState('dark')
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"))
  }
  const value={
    theme,
    toggleTheme
  }
  return (
    <ThemeApi.Provider value={{theme,toggleTheme}} >

    <div id={theme}>
    <div  id={theme} className="h-full body font-mons">
     <Navbar theme={theme} toggleTheme={toggleTheme} />
     <Skills/>
     <Op/>
     <Projects/>
     <Contactme/>
     
    </div>
    </div>
    </ThemeApi.Provider>
  );
}

export default App;
