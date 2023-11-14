import './App.css'
import GameListCard from './components/GameList'
import { Lists } from './components/Lists';
import { useGameListData, useGenreListData } from './hooks/useGameListData';

function App() {
  const { data } = useGameListData();
  const { genreData } = useGenreListData();

  return (
    <>

      <div className="genreList">
        {genreData?.map(genreListData =>
          <Lists id={genreListData.id}
            name={genreListData.name} />
        )}
      </div>
      <div className="list">
        {data?.map(gameListData => <GameListCard
          title={gameListData.title}
          year={gameListData.year}
          imageUrl={gameListData.imgUrl}
          shortDescription={gameListData.shortDescription}
        />
        )}


      </div>
    </>
  )
}

export default App
