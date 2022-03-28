import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src="../img/logo-hippona.png"/>
            <div>
                <ul>
                    <li>Remeras</li>
                    <li>Pantalones</li>
                    <li>Buzos</li>
                </ul>
                <button>Iniciar Sesión</button>
            </div>
        </nav>
    )
}

export default NavBar;