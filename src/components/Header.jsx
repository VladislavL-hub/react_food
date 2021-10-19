import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="#e040fb purple accent-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    Home
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
