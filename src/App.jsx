import { useState } from 'react'
import Header from "./features/Header"
import AddItem from "./features/AddItem"
import Items from "./features/Items"
import Footer from "./features/Footer"

function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed === true).length;

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }
  function handleChangePacked(id) {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function handleClearItems(){
    setItems([]);
  }

  return (
    <div className='grid grid-rows[auto_auto_1fr_auto] h-screen'>
      <Header />
      <AddItem onAddItems={handleAddItems} />
      <Items onDeleteItem={handleDeleteItem} items={items}
        onChangePacked={handleChangePacked} onClearItems={handleClearItems} />
      <Footer numItems={numItems} packedItems={packedItems}/>
    </div>
  )
}

export default App
