import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaymentPage from './components/payment'
import App from './App'

function router() {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
  <Route path="/payment" element={<PaymentPage/>} />
</Routes>
  )
}

export default router