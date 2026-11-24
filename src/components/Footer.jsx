const links = [['Destinos', '#destinos'], ['Serviços', '#servicos'], ['Sobre nós', '#sobre'], ['Contato', '#contato']]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand"><a className="brand brand-footer" href="#inicio"><span className="brand-mark" aria-hidden="true">✳</span><span>via<span className="brand-light">mundo</span><small>VIAGENS & EXPERIÊNCIAS</small></span></a><p>O mundo fica melhor quando<br />a gente se permite ir.</p></div>
        <div className="footer-nav"><h3>Explore</h3>{links.map(([nome, destino]) => <a key={destino} href={destino}>{nome}</a>)}</div>
        <div className="footer-contact"><h3>Vamos conversar?</h3><a href="mailto:oi@viamundoviagens.com.br">oi@viamundoviagens.com.br</a><a href="tel:+551140044025">+55 11 4004-4025</a><span>Seg a sex, das 9h às 18h</span></div>
        <a className="back-top" href="#inicio" aria-label="Voltar ao topo">↑</a>
      </div>
      <div className="container footer-bottom"><span>© 2026 ViaMundo Viagens. Todos os direitos reservados.</span><span>Feito para quem quer ir mais longe <b>✳</b></span></div>
    </footer>
  )
}

export default Footer
