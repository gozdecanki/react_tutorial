import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">      
                <a className="navbar-brand" href="/">Ülkeler</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link"  href="/">Anasayfa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Hakkında</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">İletişim</a>
                        </li>            
                    </ul>
                </div>  
        </nav>
    )
}

export default Navbar;