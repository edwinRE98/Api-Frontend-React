import React from 'react'

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a className="navbar-brand" href="/">Inicio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Lorem</a>
            <a className="nav-item nav-link" href="#">Lorem</a>
            <a className="nav-item nav-link" href="#">Lorem</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;