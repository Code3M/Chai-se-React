import React from 'react'
import { useState } from 'react'

function BtnComponent({bgcolor}) {
    const [color, setColor] = useState("#212121")
    return (
        <div className="w-full h-screen duration-200 flex flex-wrap justify-center"
        style={{backgroundColor:color}}
        >
          <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 rounded-xl"
          style={{backgroundColor:"white"}}
          >
            <button className='m-3 p-2 rounded-xl'
            style={{backgroundColor:bgcolor}}
            onClick={() => setColor(bgcolor)}
            >{bgcolor}</button>
          </div>
        </div>
)
}

export default BtnComponent