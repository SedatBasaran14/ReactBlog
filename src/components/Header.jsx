import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/">
          <h2>Blog Sitemiz</h2>
        </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Ara" aria-label="Ara" />
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Ara</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default Header;