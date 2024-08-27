
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Loader from './components/common/Loader'


const SearchBar = lazy(() => import('./components/SearchBar'))
const Home = lazy(() => import('./pages/Home'))
const ItemList = lazy(() => import('./pages/ItemList'))
const ItemDetail = lazy(() => import('./pages/ItemDetail'))

function App() {


  return (
    <Suspense fallback={<Loader />}>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ItemList />}/>
        <Route path='/item/:id' element={<ItemDetail />}/>
      </Routes>
    </Suspense>

  )
}

export default App
