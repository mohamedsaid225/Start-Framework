import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index='true' element={<Home />} /> 
            <Route path='about' element={<About />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
