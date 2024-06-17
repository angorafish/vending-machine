import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/snack1">Snack 1</Link></li>
                <li><Link to="/snack2">Snack 2</Link></li>
                <li><Link to="/snack3">Snack 3</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;