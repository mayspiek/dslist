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
 