import Navbar from './components/Navbar';
import './styles/App.css';
import './styles/home.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
