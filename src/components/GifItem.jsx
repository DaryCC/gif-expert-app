import PropTypes from 'prop-types';
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

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GifItem

