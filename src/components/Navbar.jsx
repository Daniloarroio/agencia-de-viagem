import { useState } from 'react'

const links = [
  ['Início', '#inicio'],
  ['Destinos', '#destinos'],
  ['Serviços', '#servicos'],
  ['Sobre nós', '#sobre'],
  ['Contato', '#contato'],
]

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={() => setMenuAberto(false)} aria-label="ViaMundo, início">
          <span className="brand-mark" aria-hidden="true">✳</span>
          <span>via<span className="brand-light">mundo</span><small>VIAGENS & EXPERIÊNCIAS</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>
          <span /><span /><span />
        </button>
        <div className={`nav-links ${menuAberto ? 'is-open' : ''}`}>
          {links.map(([nome, destino]) => <a key={destino} href={destino} onClick={() => setMenuAberto(false)}>{nome}</a>)}
          <a className="nav-cta" href="#contato" onClick={() => setMenuAberto(false)}>Planeje sua viagem <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
