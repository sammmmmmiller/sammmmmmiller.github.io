
import { Element } from 'react-scroll';
import About from './About';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import ChessPage from './ChessPage';
import Header from './Header';
import './App.css';
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const sections = document.querySelectorAll('.element');

    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling Down
        scrollHandler('down', sections);
      } else {
        // Scrolling Up
        scrollHandler('up', sections);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  const scrollHandler = (direction, sections) => {
    const viewportHeight = window.innerHeight;
    const currentSectionIndex = Math.round(window.scrollY / viewportHeight);

    if (direction === 'down' && currentSectionIndex < sections.length - 1) {
      sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (direction === 'up' && currentSectionIndex > 0) {
      sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <Header />
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="contact" className="element">
        <ContactMe />
      </Element>
      <Element name="portfolio" className="element">
        <Portfolio />
      </Element>
      <Element name="chess" className="element">
        <ChessPage />
      </Element>
     
    </div>
  );
}

export default App;

const styles = {
  div: {
    "background-color": "red"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  
  }
};
