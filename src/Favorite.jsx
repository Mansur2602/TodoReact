const Favorite = ({ favorite }) => {
  return (
    <>
      <h1>Избранное</h1>
      {favorite.map((item) => 
          <h2>{item.id}. {item.name}</h2>
      )}
    </>
  )
}

export default Favorite
