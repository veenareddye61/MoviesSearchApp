import axios from "axios";
import React,{useState,useEffect} from "react";
import "./style.css";
import Movie from "./Movie";

function App() {
  const [movieName,setMovieName]=useState("")
  const [popularMovie,setPopularMovie]=useState([])
  const [searchMovies,setSearchMovies]=useState([])
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
    .then((res)=>setPopularMovie(res.data.results))
  },[])
  useEffect(()=>{if(movieName==""){
    setSearchMovies([])
  }else{
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`)
  .then((res)=>setSearchMovies(res.data.results))}},[movieName])
    
  
  return (
    <div className="movieapp">
      <form className="search">
        <input className="searchmv" placeholder="Search for Movie" value={movieName} type="search" onChange={(e)=>{setMovieName(e.target.value)}}></input>
      </form>
      {searchMovies.length==0 && movieName=="" ? 
      <div className="movieDiv">
      {
      popularMovie.map((movie,i) => {
          return(
            <Movie poster_path={movie.poster_path} original_title={movie.original_title} />
          /*<div className="movieCard">
            <img className="movieimg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
            <p className="movietitle">{movie.original_title}</p>
          </div>*/)})}
      
      </div> : 
      <div className="movieDiv">
      {
      searchMovies.map((movie,i) => {
          return(
            <Movie poster_path={movie.poster_path} original_title={movie.original_title} />
         /* <div className="movieCard">
            <img className="movieimg" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
            <p className="movietitle">{movie.original_title}</p>
          </div>*/)})}
      
      </div> }
      </div>)
  
}

export default App;
