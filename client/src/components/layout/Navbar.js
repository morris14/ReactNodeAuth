import React from "react";

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
                <li>Log in</li>
                <li>Register</li>
            </ul>
        </div>
    );
    return guestNav;
};

export default Navbar;
