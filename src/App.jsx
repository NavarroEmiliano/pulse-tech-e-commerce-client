import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { initializeUserDetails } from './features/userSlice'
import { initializeAllProductsAction } from './features/productsSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUserDetails())
    dispatch(initializeAllProductsAction())
  }, [])

  return (
    <>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
      <Header />
      <main className="min-h-[calc(100vh-120px)] w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
