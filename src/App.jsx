import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from './layouts/MainContainer'
import NotePages from './pages/NotePages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route path='/notes/:noteStatus' element={<NotePages />} />
        <Route path='/add-data' element={<NotePages />} />
      </Route>
    </Routes>
  )
}

export default App
