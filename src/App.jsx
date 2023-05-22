// import pre-built components
import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

// additionally created sections
import Prolangs from './components/Prolangs';
import SocialLinks from './components/SocialLinks';

const App = () => {

  return (
    <BrowserRouter>
      <div classname="relative z-0 bg-primary">
        <div classname="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Prolangs />
        <Tech />
        <Works />
        <Feedbacks />
        <div className ="relative z-0">
          <Contact />
        </div>
        <SocialLinks />
      </div>
    </BrowserRouter>
  )
}

export default App
