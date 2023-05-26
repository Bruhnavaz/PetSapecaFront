const Favoritos = () => {
  return (
    <header className="header-user">
      <nav>
        <ul>
          <li>
          <img src="/logo.svg" alt="Logo" />
          </li>
          <li>
            <a href="/home">Página Inicial</a>
          </li>
          <li>
            <a className="page-open" href="/favoritos">
              Favoritos
            </a>
          </li>
          <li>
            <a href="/carrinho">Carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Favoritos;
