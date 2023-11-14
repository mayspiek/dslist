import './App.css'
import GameListCard from './components/GameList'
import { useGameListData } from './hooks/useGameListData';

function App() {
  const { data } = useGameListData();

  return (
    <>
      <div className="list">
        {data?.map(gameListData => <GameListCard
          title={gameListData.title}
          year={gameListData.year}
          imageUrl={gameListData.imageUrl}
          shortDescription={gameListData.shortDescription} 
          />
        )}


      </div>
    </>
  )
}

export default App
