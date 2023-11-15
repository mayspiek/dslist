import { useGenreListData } from "../hooks/useGameListData";
import './GenreList.css'
interface genreProps {
    id: number,
    name: string
}
 
export function Lists( { id, name } : genreProps){
    return(
        <div className="boxBorder">
            <p>{id}</p>
            <p>{name}</p>
        </div>
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
 