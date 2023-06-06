import './Header.scss'
import Logo from '../../assets/eucartoon.png'

export const Header = () => {
  return (
    <section className='header'>
      <div className="header-content">
        <p>Organização</p>
        <span>Tarefas</span>
      </div>
      <div className='header-logo'>
        <a href="https://github.com/Gguife" target='_blank'><img src={Logo} alt="Logo"/></a>
      </div>
    </section>
  )
}
