import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { projects } from './data/projects';

function App() {
  return (
    <Layout>
      <Hero />
      <Highlights projects={projects} />
      <About />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  );
}

export default App;