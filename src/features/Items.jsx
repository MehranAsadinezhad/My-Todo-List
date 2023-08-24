import React, { useState } from 'react'

export default function Items({ items, onDeleteItem, onChangePacked, onClearItems }) {
    const [sort, setSort] = useState("input")

    let sortedItems;
    if (sort === 'input') sortedItems = items;
    if (sort === 'packed') {
        sortedItems = items.slice().sort((a, b) =>
            Number(a.packed) - Number(b.packed));
    }
    if (sort === "description") {
        sortedItems = items.slice().sort((a, b) =>
            a.description.localeCompare(b.description));
    }

    return (
        <div className='flex flex-col justify-between 
        bg-sky-400 transition-all'>
            <div className='my-7 mx-44 '>
                <ul className='flex flex-wrap overflow-y-scroll'>
                    {sortedItems.map((item) =>
                        <li className='flex mr-10 mt-5'
                            item={item} key={item.id}>
                            <input type='checkbox' className='cursor-pointer w-5'
                                defaultValue={item.packed}
                                onChange={() => onChangePacked(item.id)}></input>

                            <span className={`mx-3 text-xl font-secondary 
                        font-semibold ${item.packed ? 'line-through' : ''}`}
                            >{item.quantity} {item.description}</span>

                            <button onClick={() => onDeleteItem(item.id)}
                            className='transition-all hover:scale-125'>❌</button>
                        </li>)}
                </ul>
            </div>

            <div className='flex items-center space-x-5 justify-center my-7'>
                <select defaultValue={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='bg-black text-white px-5 py-2 
                    rounded-full cursor-pointer font-semibold'>
                    <option value="input"
                        className='font-semibold '>SORT BY INPUT ORDER</option>
                    <option value="description"
                        className='font-semibold '>SORT BY DESCRIPTION</option>
                    <option value="packed"
                        className='font-semibold '>SORT BY PACKED STATUS</option>
                </select>
                <button className='bg-black text-white font-semibold 
                px-5 py-2 rounded-full cursor-pointer
                transition-all hover:bg-pink-300 hover:text-black'
                    onClick={onClearItems}>CLEAR LIST</button>
            </div>
        </div>
    )
}
