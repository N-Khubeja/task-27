import React from 'react'
import { Iroutes } from '../routes/routes'
import { Link, Outlet } from 'react-router-dom'

interface UNavigation {
    route:Iroutes[],
    vertical:boolean
}

const Navigation:React.FC<UNavigation> = ({route,vertical}) => {
  return (
    <div>
        <nav className={`nav ${vertical ? 'vertical' : 'horizontal'}`}>
            {route.map(({label,path}) => (
                <Link to={path}>{label}</Link>
            ))}
        </nav>

        <Outlet/>
    </div>
  )
}

export default Navigation