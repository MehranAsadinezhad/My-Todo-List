import { useState } from 'react'
import Header from "./features/Header"
import AddItem from "./features/AddItem"
import Items from "./features/Items"
import Footer from "./features/Footer"

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  console.log(items);
  return (
    <div className='grid grid-rows[auto_auto_1fr_auto] h-screen'>
      <Header />
      <AddItem onAddItems={handleAddItems} />
      <Items items={items} />
      <Footer />
    </div>
  )
}

export default App
