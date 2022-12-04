import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
            <section>
                <div>
                    <NavLink to="/"><p className='border w-full h-full px-4 centered'>Home</p></NavLink>
                    <NavLink to="/login"><p className='border w-full h-full px-4 centered'>Login</p></NavLink>
                    <NavLink to="/register"><p className='border w-full h-full px-4 centered'>Register</p></NavLink>
                    <NavLink to="/premium-content"><p className='border w-full h-full px-4 centered'>Premium-Content</p></NavLink>

                </div>
            </section>
        </React.Fragment>
  )
}

export default Navbar