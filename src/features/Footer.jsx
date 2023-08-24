import React from 'react'

export default function Footer({ numItems, packedItems }) {
  return (
    <h1 className='flex items-center justify-center bg-sky-300
    text-2xl font-secondary font-bold italic'>
      {numItems === 0 ? "Start adding some items to your packing list 🚀"
        : `💼 You have ${numItems} items on your list, and you already 
        packed ${packedItems} (${Math.round((packedItems / numItems) * 100)}%)`}
    </h1>
  )
}
