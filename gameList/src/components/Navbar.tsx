import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/genre">Gêneros</Link>
            <Link to="/gamelist">Lista por Gênero</Link>
        </nav>
    )
}
