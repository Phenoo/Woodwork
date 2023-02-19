import React from 'react'
import Link from 'next/link'

const UserNav = () => {
  return (
    <nav className=' ml-6 space-x-4 lg:block'>
      <Link href='/contact'>
        contact
      </Link>
  </nav>
  )
}

export default UserNav
