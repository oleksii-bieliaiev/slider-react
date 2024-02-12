import React from 'react'

export const Video = ({ title, url }) => {
  
  return (
    <iframe 
      width="100%" 
      height="315" 
      title={title} 
      src={url}
      frameBorder="0" 
      allowFullScreen
    ></iframe>
  )
}



