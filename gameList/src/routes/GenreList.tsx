import { useGenreListData } from "../hooks/useGameListData";

interface genreProps {
    id: number,
    name: string
}
 
export function Lists( { id, name } : genreProps){
    return(
        <>
            <p>{id}</p>
            <p>{name}</p>
        </>
    );
}

function GenreList() {
  const { genreData } = useGenreListData();

  return (
    <div className="genreList">
    {genreData?.map(genreListData =>
      <Lists id={genreListData.id}
        name={genreListData.name} />
    )}
  </div>
  )
}

export default GenreList
 