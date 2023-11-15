import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/genre">Gêneros</Link>
            <Link to="/gamelist">Lista por Gênero</Link>
        </>
    )
}
