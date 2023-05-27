const Produtos = () => {
  return (
    <>
      <div className="page-fornecedor">
        <header className="header-admin">
          <nav>
            <ul>
              <li>
                <img className="logo-header" src="/logo.svg" alt="Logo" />
              </li>
              <li>
                <a href="/fornecedor">FORNECEDORES</a>
              </li>
              <li>
                <a href="/banner">BANNERS</a>
              </li>
              <li>
                <a className="page-admin" href="/produtos">
                  PRODUTOS
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-fornecedor">
          <div className="fornecedores">
            <div className="board-fornecedores">
              <h2>PRODUTOS</h2>
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
  );
};
export default Produtos;
