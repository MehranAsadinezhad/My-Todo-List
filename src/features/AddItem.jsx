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
            className='bg-secondaryPink flex flex-col items-center justify-center
            tablet:flex-row tablet:space-x-3 tablet:p-2' >
            <label className='font-secondary font-bold mt-1 tablet:text-xl
            tablet:mt-0'>
                What do you need for your 😍 trip?</label>

            <select id='quantity' value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                className='bg-black rounded-full py-1 
            px-3 tablet:px-5 tablet:mt-0 tablet:py-3 text-white cursor-pointer
            mt-2'>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) =>
                    <option value={num} key={num}>{num}</option>)}
            </select>

            <input type='text' id='description'
                className='bg-black rounded-full py-1 px-3 
            text-white my-2 tablet:my-0 focus:outline-none transition-all
            focus:ring focus:ring-sky-400 focus:scale-105 tablet:px-5 
            tablet:py-3' placeholder='Item...'
                value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <button className='bg-pink-100 py-1 px-3 mb-2 rounded-full
            text-black font-secondary font-bold transition-all 
            hover:bg-black hover:text-white tablet:px-5 tablet:py-3
            tablet:mb-0'>ADD</button>
        </form>
    )
}
