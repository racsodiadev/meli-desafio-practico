
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Loader from './components/common/Loader'

const SearchBar = lazy(() => import('./components/SearchBar'))
const Home = lazy(() => import('./pages/Home'))

function App() {


  return (
    <Suspense fallback={<Loader />}>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>

  )
}

export default App
