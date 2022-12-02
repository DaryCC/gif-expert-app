import React from 'react'

const GifItem = ({url, title,id}) => {

  // console.log(props);
  return (
    <div className="card">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default GifItem
