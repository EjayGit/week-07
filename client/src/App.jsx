import './App.css'
import {Routes, Route} from 'react-router'
import BlogPage from './components/BlogPage'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path={'/'}/>
        <Route element={<BlogPage/>} path={'/blogpage'}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
