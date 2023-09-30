import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Navigation() {
  return (
    <ul className='flex space-x-4 font-light'>
            <li><NavLink to={"/"} className={({isActive}) =>
                                        `${isActive ? "underline underline-offset-8":"text-gray-700"}`
                                    }> About </NavLink></li>
            <li><NavLink to={"/skills"} className={({isActive}) =>
                                        `${isActive ? "underline underline-offset-8":"text-gray-700"}`
                                    }> Skills </NavLink></li>
            <li><NavLink to={"/projects"} className={({isActive}) =>
                                        `${isActive ? "underline underline-offset-8":"text-gray-700"}`
                                    }> Projects </NavLink></li>
            <li><NavLink to={"/academics"} className={({isActive}) =>
                                        `${isActive ? "underline underline-offset-8":"text-gray-700"}`
                                    }> Academic Work </NavLink></li>
        </ul>
  )
}

export default Navigation