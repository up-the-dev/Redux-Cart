
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './views/Home.jsx'
import Cart from './views/Cart.jsx'
import './app.css'
import { Provider } from 'react-redux'
import store from './store/store.js'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={'/home'} element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
