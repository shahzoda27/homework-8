import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from './component/featurs/post/PostList';
export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<PostList/>}/>
     </Routes>
    </>
  )
}