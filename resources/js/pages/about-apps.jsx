import React from 'react'

const AboutApps = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full h-1/2 flex justify-center p-4 border-accent border-2 rounded-lg">
        <h2>Filters</h2>
      </div>
      <div className="w-full h-1/2 grid grid-cols-2 grid-rows-2 gap-4">
        <div className='w-1/2 h-1/2 bg-black'></div>
        <div className='w-1/2 h-1/2 bg-black'></div>
      </div>
    </div>
  )
}

export default AboutApps