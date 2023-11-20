import React from 'react'
import './VideoTile.css'

function VideoTile({ title, description, keywords, thumbnail }) {
  return (
    <div className='container-page'>
      <div className='container-card' >
        <img src={thumbnail} className='container-image' alt={title} />
      <div className='container-title'>
        <p> {title}</p>
      </div>
      </div>
    </div>

  );
}

export default VideoTile
