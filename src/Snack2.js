import React from "react";
import { Link } from 'react-router-dom';

function Snack2() {
    return (
        <div>
            <h1>Snack 2</h1>
            <p>This is Snack 2.</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Snack2;