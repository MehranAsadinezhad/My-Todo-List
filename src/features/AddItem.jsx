import React, { useState } from 'react'

export default function AddItem({ onAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            description, quantity, packed: false,
            id: Date.now()
        }
        onAddItems(newItem);
        setDescription('');
        setQuantity(1);
    }

    return (
        <form onSubmit={handleSubmit}
            className='bg-secondaryPink flex items-center justify-center' >
            <label className='font-secondary font-bold  text-xl'>
                What do you need for your 😍 trip?</label>

            <select id='quantity' value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                className='bg-black rounded-full py-3 
            px-5 text-white ml-5 cursor-pointer'>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
                    <option value={num} key={num}>{num}</option>)}
            </select>

            <input type='text' id='description'
                className='bg-black rounded-full py-3 px-5 
            text-white mx-5 focus:outline-none transition-all
            focus:ring focus:ring-pink-100 focus:px-7' placeholder='Item...'
                value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <button className='bg-pink-100 py-3 px-5 rounded-full
            text-black font-secondary font-bold transition-all 
            hover:bg-black hover:text-white'>ADD</button>
        </form>
    )
}
