import Navbar from './components/Navbar';
import './styles/App.css';
import './styles/home.css';
import './styles/footer.css';
import './styles/about.css';
import './styles/project.css';
import './styles/contact.css';
import './styles/emailfloat.css';
import { HashRouter,  Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Footer from './components/footer';
import Project from './components/Projects';
import Contact from './components/Contact';
import EmailFloat from './components/Emailfloat';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='projects' element={<Project/>} />
              <Route path='contact' element={<Contact/>} />
            </Routes>
          </main>
        </HashRouter>
      </header>
      <EmailFloat />
      <Footer/>
    </div>
  );
}

export default App;
