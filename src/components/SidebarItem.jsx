import React from 'react'
import { Link } from 'react-router-dom'
import "./SidebarItem.css"

function SidebarItem({item}) {
  return (
    <div>
      <div className="sidebar-items d-flex align-items-center active">
        <Link to={item.links}>
        
        <item.svg />
        <span className="sidebar-text">{item.name}</span>
        </Link>
      </div>
    </div>
  )
}

export default SidebarItem
