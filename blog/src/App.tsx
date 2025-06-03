import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Skill from "./skill"
import Life from "./life"
import Game from "./game"
import NewPost from './NewPostPage'
import Icon from './IconFadeIn';

function App() {
  const [showIcon, setShowIcon] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);;
  }
  if (showIcon) {
    return <Icon />; 
  }
  return (
    <BrowserRouter>
      <div className='main-nav'>
        <div className="hamburger-menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div> 
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div> 
        </div>
        <h2>Notes Of Days</h2>
      </div>


      <div className={`drawer-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/" onClick={handleMenuItemClick}>Home</Link>
          <Link to="/skill" onClick={handleMenuItemClick}>Skill</Link>
          <Link to="/life" onClick={handleMenuItemClick}>Life</Link>
          <Link to="/game" onClick={handleMenuItemClick}>Game</Link>
          <Link to='/new-post' onClick={handleMenuItemClick}>new-post</Link>
        </nav>
      </div>
      
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path='/life' element={<Life />}/>
        <Route path='/game' element={<Game />}/>
        <Route path='/new-post' element={<NewPost />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
