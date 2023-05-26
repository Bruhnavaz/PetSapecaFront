// import { useUsers } from "../../hooks/useUsers"
// import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
// import { Link } from "react-router-dom"
const Home = () => {
  // const { users, isLoading, isError, error } = useUsers()

  return (
    <div className="page-home">
      <header className="header-user">
        <nav>
          <ul>
            <li>
              <img src="../../assets/logo.svg" alt="" />
            </li>
            <li>
              <a className="page-open" href="/home">
                Página Inicial
              </a>
            </li>
            <li>
              <a href="/favoritos">Favoritos</a>
            </li>
            <li>
              <a href="/carrinho">Carrinho</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-home">
        <div className="carrossel-container">
          <div className="carrossel-itens">
            <div className="item um">Slide 1</div>
            <div className="item dois">Slide 2</div>
            <div className="item tres">Slide 3</div>
            <div className="item quatro">Slide 4</div>
          </div>
        </div>
        <div className="produtos">
          <div className="produto-item">

          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
