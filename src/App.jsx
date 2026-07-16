import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '16px',
      backgroundColor: '#1a1a2e'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"
         element={<Home />
         } 
         />
        <Route path="/about"
         element={<About 
         />
         } 
         />
        <Route path="/contact"
         element={<Contact />
         } 
         />
         <Route path="*"
          element={<NotFound />
        } 
          />

      </Routes>
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>This page doesn't exist.</p>
    </div>
  )
}
<Route path="*" element={<NotFound />} />

export default App