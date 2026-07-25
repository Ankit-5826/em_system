import React from 'react'

function Header() {
  return (
    <>
       <div className='flex justify-between p-5 bg-amber-600' >
          <div className='text-2xl'>
            hello <span className='text-3xl'> Ankit 👋</span>
          </div>

          <div>
                <span className='text-2xl bg-red-500  text-white px-3  py-2 rounded-2xl'> logout </span>
          </div>
       </div>
    </>
  )
}

export default Header