import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <>
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Airbnb</Link>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <span>{user.name}</span>
                            <button className="btn" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="btn">
                                Register
                            </Link>
                            <Link to="/login" className="btn">
                                Log In
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;