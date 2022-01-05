import imagenes from '../assets/img/images'

export const Header = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-light nav-desing">
        <div className="container">
          <a
            className="navbar-brand"
            href="https://www.ucol.mx/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img src={imagenes.udcLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://sistemas3.ucol.mx/sed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acerca de nosotros
                </a>
              </li>
              <li className="nav-item item-log">
                <a className="nav-link" href="?">
                  Salir
                </a>
                <a href="?" className="logout">
                  {' '}
                  <img src={imagenes.logout} alt="" />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
