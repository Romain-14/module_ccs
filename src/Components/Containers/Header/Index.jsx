import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h1>dis' is ze header</h1>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/blog"}>Blog</Link>
            </nav>
        </>
    );
}

export default Header;
