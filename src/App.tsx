import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Coder from './components/Coder';
import Editor from './components/Editor';
import Thinker from './components/Thinker';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="min-h-screen bg-background text-white selection:bg-primary/30 font-sans">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

          <main className="relative z-0 pb-20">
            <AnimatePresence mode="wait">
              {activeSection === 'hero' && (
                <motion.div
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <Hero />
                </motion.div>
              )}

              {activeSection === 'coder' && (
                <motion.div
                  key="coder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen"
                >
                  <Coder />
                </motion.div>
              )}

              {activeSection === 'editor' && (
                <motion.div
                  key="editor"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen"
                >
                  <Editor />
                </motion.div>
              )}

              {activeSection === 'thinker' && (
                <motion.div
                  key="thinker"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen"
                >
                  <Thinker />
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      )}
    </>
  );
}

export default App;