import React from "react";
import { Link } from 'react-router-dom';

function Snack3() {
    return (
        <div>
            <h1>Snack 3</h1>
            <p>This is Snack 3.</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Snack3;