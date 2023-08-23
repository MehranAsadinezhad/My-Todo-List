import { useState } from 'react'
import Header from "./features/Header"
import AddItem from "./features/AddItem"
import Items from "./features/Items"
import Footer from "./features/Footer"

function App() {


  return (
    <>
      <Header />
      <AddItem />
      <Items />
      <Footer />
    </>
  )
}

export default App
