export const Card = (props) => {
  
  const movieTitle = props.movieTitle 
  const movieRd = props.movieRd
  const movieRate = props.movieRate
  const movieImg = props.movieImg


  return (
    <>
    <div className="card w-96 m-4 glass">
  <figure><img src={movieImg} alt="Spiderman"/></figure>
  <div className="card-body">
    <h2 className="card-title">{movieTitle}</h2>
    <p>Relase : {movieRd}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Rate : {movieRate}</button>
    </div>
  </div>
   </div>
    </>
    )
}