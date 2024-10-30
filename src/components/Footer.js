import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="flex">
            <div onClick={() => { window.scroll(0, 0);}} className="my-10 text-center mx-auto cursor-pointer btn-primary btn text-white p-3 uppercase font-semibold rounded-md">
                Jump to Top
            </div>
            <div className='made'>
                <p>© 2024 Copyright : Shyam Dhokiya </p>
            </div>
        </div>
        
    </div>
    </>
  )
}
