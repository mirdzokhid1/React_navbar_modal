import "./App.css";

import Home from './components/Navbar'; 
import Hero from './components/Hero';

import './components/navbar.scss';


function App(){
        return (
          <header>
            <nav>
              <div className="container">
                <Home />
              </div>
            </nav>
            <div className="container">
              <Hero />
            </div>
          </header>
        );
    }

export default App;
