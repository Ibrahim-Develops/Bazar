import Asidebar from '@/components/Asidebar'
import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex'>
        <Asidebar/>
        <div className='w-full'>
        <Navbar/>
        {children}
        </div>
    </div>
  )
}

export default layout