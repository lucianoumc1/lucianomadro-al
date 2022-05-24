import './Navbar.scss'

export default function Menu() {

  return (
    <div className='navbar-menu__section'>
      <nav className='navbar-menu__container'>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#proyects">Proyectos</a></li>
          <li><a href="#contact-section">Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}
