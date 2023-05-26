const Produtos = () => {
    return (
        <header className="header-admin">
          <nav>
            <ul>
            <li>
                <img src="../../assets/logo.svg" alt="" />
            </li>
              <li>
                <a href="/fornecedor">FORNECEDORES</a>
              </li>
              <li>
                <a href="/banner">BANNERS</a>
              </li>
              <li>
                <a className="page-admin" href="/produtos">PRODUTOS</a>
              </li>
            </ul>
          </nav>
        </header>
    )
}
export default Produtos