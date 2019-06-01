import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
    const authNav = (
        <div>
            <ul>
                <a href='#!' onClick={logout}>
                    Logout
                </a>
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
    return (
        <Fragment>
            {!loading && <Fragment>{isAuthenticated ? authNav : guestNav}</Fragment>}
        </Fragment>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logout },
)(Navbar);
