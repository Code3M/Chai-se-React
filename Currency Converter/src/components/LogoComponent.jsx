import React from 'react'

function LogoComponent({ima, 
  cn = "",
  w = "w-36 h-full" ,
 

}) {
  return (
    <div className={`${w} ${cn}`}
    style={{backgroundImage : `url('src/assets/${ima}')`,
            backgroundSize : 'cover',
             }}
    ></div>
  )
}

export default LogoComponent