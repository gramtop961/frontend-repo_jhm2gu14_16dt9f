import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

const getRoute = () => {
  const hash = window.location.hash || '#/';
  const path = hash.replace('#', '');
  return path;
};

function App() {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  let Page = null;
  switch (route) {
    case '/':
      Page = <Home />;
      break;
    case '/about':
      Page = (
        <div className="pt-14 bg-black min-h-screen">
          <About />
        </div>
      );
      break;
    case '/projects':
      Page = (
        <div className="pt-14 bg-black min-h-screen">
          <Projects />
        </div>
      );
      break;
    case '/skills':
      Page = (
        <div className="pt-14 bg-black min-h-screen">
          <Skills />
        </div>
      );
      break;
    case '/contact':
      Page = (
        <div className="pt-14 bg-black min-h-screen">
          <Contact />
        </div>
      );
      break;
    case '/certifications':
      Page = (
        <div className="pt-14 bg-black min-h-screen">
          <Certifications />
        </div>
      );
      break;
    default:
      Page = <Home />;
  }

  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      {Page}
      <footer className="border-t border-white/10 bg-black py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
