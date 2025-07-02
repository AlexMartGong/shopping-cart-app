import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" href="#">Shopping Cart</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/cart" aria-current="page" href="#">Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}