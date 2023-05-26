
const Carrinho = () => {
  // const { users, isLoading, isError, error } = useUsers()

  return (
    <header className="header-user">
      <nav>
        <ul>
        <li>
            <img src="../../assets/logo.svg" alt="" />
        </li>
          <li>
            <a href="/home">Página Inicial</a>
          </li>
          <li>
            <a href="/favoritos">Favoritos</a>
          </li>
          <li>
             <a className="page-open" href="/carrinho">Carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Carrinho