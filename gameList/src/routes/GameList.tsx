import { useGameListData } from "../hooks/useGameListData"

interface GameListProps {
    title: string,
    year: number,
    imageUrl: string,
    shortDescription: string
}


function GameListCard({ title, year, imageUrl, shortDescription }: GameListProps) {
    return (
        <div className="card">
            <h2>Title: {title}</h2>
            <p>Year: {year}</p>
            <img src={imageUrl} alt="" />
            <p>Short Description: {shortDescription} </p>
        </div>
    );
}


export function GameList(){
    const { data } = useGameListData();
    return (
        <div className="list">
            {data?.map(gameListData => <GameListCard
                title={gameListData.title}
                year={gameListData.year}
                imageUrl={gameListData.imgUrl}
                shortDescription={gameListData.shortDescription}
            />
            )}
        </div>
    )
}

