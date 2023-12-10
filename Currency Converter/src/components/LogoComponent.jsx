import React from 'react'

function LogoComponent({ima, 
  cn = "",
  w = "w-36"  
}) {
  return (
    <div className={`${w} h-full ${cn}`}
    style={{backgroundImage : `url('src/assets/${ima}')`,
            backgroundSize : 'cover',
             }}
    ></div>
  )
}

export default LogoComponent