import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const authNav = (
        <div>
            <ul>
                <li>Logout</li>
            </ul>
        </div>
    );
    const guestNav = (
        <div>
            <ul>
                <li>
                    <Link to='/login'>Log in</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </div>
    );
    return guestNav;
};

export default Navbar;
