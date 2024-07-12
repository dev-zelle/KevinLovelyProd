import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/ui/Navbar';

const Home = lazy(() => import('./components/pages/Home'));

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div> </div>}><Home /></Suspense>} />  
        </Routes>
      </div>
    </div>
  )
}

export default App
