import './App.css'
import {Routes, Route} from 'react-router'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'

function App() {
  
  return (
    <>
      <h1>This is where the header should be.</h1>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path={'/'}/>
        <Route element={<AboutPage/>} path={'/about'}/>
        <Route element={<BlogPage/>} path={'/blog'}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
