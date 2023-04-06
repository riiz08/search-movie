import {Navbar} from './Components/Navbar'
import {Footer} from './Components/Footer'
import { getMovieList, searchMovie } from './Api/Movie'
import { useEffect, useState } from 'react'

function App() {
  const [popularMovies, setPopularMovies] = useState([])
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  
  const PopularMovieList = () => {

    return popularMovies.map((movie, i) => {
      const baseImgUrl = process.env.REACT_APP_BASEIMGURL
      return (
      <div key={i} className="card w-96 m-4 glass">
       <figure>
       <img src={`${baseImgUrl}${movie.poster_path}`} alt={movie.title} />
       </figure>
  <div className="card-body">
    <h2 className="card-title">{movie.title}</h2>
    <p>Relase : {movie.release_date}</p>
    <div className="card-actions justify-end">
      <button className="w-[60px] rounded-lg btn-primary sm:btn-sm md:btn-md lg:btn-lg">{movie.vote_average}</button>
    </div>
     </div>
   </div>
   )
    })
  }
  
  const search = async (q) => {
    if (q.length > 3) {
    const query = await searchMovie(q)
    setPopularMovies(query.results)
    }
  }
  
  return (
    <div>
    <Navbar>Riiz Search Movie</Navbar>
    <div className="flex pt-6 justify-center items-center">
    <input type="text" placeholder="Search movie" className="input w-full bg-base-300 input-md max-w-xs" onChange={({ target }) => search(target.value)} />
    </div>
    <div className="flex flex-wrap py-4 mx-4 justify-center items-center">
    <PopularMovieList />
    </div>
    <div>
    <a className="btn fixed bottom-0 right-0 my-2 mx-1 bg-base-500" href="https://saweria.co/riizcansee">
    Support me
    </a>
    </div>
    <Footer/>
    </div>
  );
}

export default App;