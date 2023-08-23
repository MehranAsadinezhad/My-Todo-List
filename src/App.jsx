import { useState } from 'react'
import Header from "./features/Header"
import AddItem from "./features/AddItem"
import Items from "./features/Items"
import Footer from "./features/Footer"

function App() {


  return (
    <div className='grid grid-rows-4 h-screen'>
      <Header />
      <AddItem />
      <Items />
      <Footer />
    </div>
  )
}

export default App
