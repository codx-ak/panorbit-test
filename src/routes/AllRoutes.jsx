import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import HomePage from '../pages/HomePage'
import Posts from '../pages/Posts'
import Gallery from '../pages/Gallery'
import Todo from '../pages/Todo'
import Profile from '../pages/Profile'
import Context from '../context/Context'
import Page404 from '../pages/Page404'

const AllRoutes = () => {
  return (
    <Context>
    <Routes>
        <Route path="/" element={<LandingPage/>} />
          <Route path="user/:userId/" element={<HomePage />} >
            <Route path="profile" element={<Profile/>} />
            <Route path="posts" element={<Posts />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="todo" element={<Todo />} />
          </Route>
          <Route path='*' element={<Page404/>}/>
    </Routes>
    </Context>
  )
}

export default AllRoutes