import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainContainer from './layouts/MainContainer'
import NotePages from './pages/NotePages'
import AddNotePage from './pages/AddNotePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer />}>
        <Route path='/notes/:noteStatus' element={<NotePages />} />
        <Route path='/add-note' element={<AddNotePage />} />
        <Route path='/note/:id' element={<DetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
