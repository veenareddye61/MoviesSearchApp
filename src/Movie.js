import React from 'react'

function Movie({poster_path,original_title}) {
  return (
    
        <div className="movieCard">
          <img className="movieimg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}/>
          <p className="movietitle">{original_title}</p>
        </div>
    
    
  )
}

export default Movie