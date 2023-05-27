const Fornecedor = () => {
    return (
      <>
      <div className="page-fornecedor">
        <header className="header-admin">
          <nav>
            <ul>
            <li>
            <img className="logo-header"  src="/logo.svg" alt="Logo" />
            </li>
              <li>
                <a className="page-admin" href="/fornecedor">FORNECEDORES</a>
              </li>
              <li>
                <a href="/banner">BANNERS</a>
              </li>
              <li>
                <a href="/produtos">PRODUTOS</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-fornecedor">
          <div className="fornecedores">
            <div className="board-fornecedores">
            <h2>FORNECEDORES</h2>
            <ul className="lista-fornecedor">
              <li><p>123.123.123/0001 </p>,<p>Mars S.A </p>,<p>(11) 1234-5678 </p>,<p>contato@mars.com.br </p></li>
            </ul>
            </div>
          </div>
          <div className="form-fornecedores">
            <div className="cadastro-fornecedor">
              <h2>CADASTRO</h2>
            </div>
            <div className="editar-fornecedor">
            <h2>EDITAR</h2>
            </div>
          </div>
        </main>
      </div>
      </>
    )
}
export default Fornecedor