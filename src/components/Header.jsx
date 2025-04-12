import React from 'react'

const Header = ({handleMarkAllAsRead}) => {

  return (
    <header className='flex justify-between'>
        <div className='flex items-center gap-[11px] font-extrabold'>
            <p className='text-[24px]'>Notifications</p>
            <div className='bg-[#0A327B] w-[32px] h-[25px] rounded-[6px] flex items-center justify-center text-[16px] text-white'>3</div>
        </div>
        <button onClick={handleMarkAllAsRead} className='text-[#5E6778] font-medium text-[16px] hover:text-[#0A327B]'>Mark all as read</button>
    </header>
  )
}

export default Header