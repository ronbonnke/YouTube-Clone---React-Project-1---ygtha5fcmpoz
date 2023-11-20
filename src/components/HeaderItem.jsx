import React from 'react'

function HeaderItem({item}) {
  return (
    <div className="header d-flex align-items-center justify-content-space-between">
      <div >
        <item.svg />
      
      </div>
    </div>
  )
}

export default HeaderItem