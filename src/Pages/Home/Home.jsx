import React from 'react';
import About from './HomeShared/About';
import Contact from './HomeShared/Contact';
import Hero from './HomeShared/Hero';
import Projects from './HomeShared/Projects';
import Skills from './HomeShared/Skills';

const Home = () => {
    return (
        <>
          <Hero></Hero>  
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </>
    );
};

export default Home;