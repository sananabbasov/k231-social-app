import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'

function MyRouter() {
  return (
    <Routes>
        <Route  path="/" element={<FeedPage />} />
        <Route  path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default MyRouter