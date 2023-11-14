// "id": 1,
// "title": "Mass Effect Trilogy",
// "year": 2012,
// "imgUrl": "https://raw.githubusercontent.com/devsuperior/java-spring-dslist/main/resources/1.png",
// "shortDescription": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit esse officiis corrupti unde repellat non quibusdam! Id nihil itaque ipsum!"

interface GameListProps {
    title: string,
    year: number,
    imageUrl: string,
    shortDescription: string
}

function GameListCard( { title, year, imageUrl, shortDescription} : GameListProps) {
    return ( 
        <div className="card">
            <h2>Title: {title}</h2>
            <p>Year: {year}</p>
            <img src={imageUrl} alt="" />
            <p>Short Description: {shortDescription} </p>
        </div>
     );
}

export default GameListCard;