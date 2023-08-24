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
            <div className='my-2 tablet:my-7 tablet:mx-44'>
                <ul className='flex flex-wrap overflow-scroll'>
                    {sortedItems.map((item) =>
                        <li className='flex bg-sky-500 rounded-full p-1
                        justify-around mr-3 my-2 tablet:mr-10 target:mt-5
                        tablet:p-3'
                            item={item} key={item.id}>
                            <input type='checkbox' className='cursor-pointer tablet:w-5'
                                defaultValue={item.packed}
                                onChange={() => onChangePacked(item.id)}></input>

                            <span className={`font-secondary 
                            font-bold mx-2 tablet:mx-3 
                            ${item.packed ? 'line-through' : ''}`}
                            >{item.quantity} {item.description}</span>

                            <button onClick={() => onDeleteItem(item.id)}
                                className='transition-all hover:scale-125'>❌</button>
                        </li>)}
                </ul>
            </div>

            <div className='flex items-center justify-center mb-2 space-x-3
            tablet:mb-7 tablet:space-x-6'>
                <select defaultValue={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='bg-black text-white 
                    rounded-full cursor-pointer font-semibold p-1 tablet:px-5
                    tablet:py-3'>
                    <option value="input"
                        className='font-semibold '>SORT BY INPUT ORDER</option>
                    <option value="description"
                        className='font-semibold '>SORT BY DESCRIPTION</option>
                    <option value="packed"
                        className='font-semibold '>SORT BY PACKED STATUS</option>
                </select>
                <button className='bg-black text-white font-semibold 
                rounded-full cursor-pointer p-1 tablet:px-5
                tablet:py-3
                transition-all hover:bg-pink-300 hover:text-black'
                    onClick={onClearItems}>CLEAR LIST</button>
            </div>
        </div>
    )
}
