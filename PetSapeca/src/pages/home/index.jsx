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
              <img className="logo-header" src="/logo.svg" alt="Logo" />
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
            <div className="item">     <img className="item-banner" src="/banner.png" alt="banner" />  
</div>
            <div className="item tres"> <img className="item-banner" src="/banner5.jpg" alt="banner" />  </div>
            <div className="item quatro"> <img className="item-banner" src="/banner3.jpeg" alt="banner" />  </div>
            <div className="item dois"> <img className="item-banner" src="/banner2.png" alt="banner" />  </div>
          </div>
        </div>
        <div className="produtos">
          <div className="card">
            <img
              src="caminho_da_imagem"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Nome do Produto</h3>
              <p className="card-price">R$ 99,99</p>
              <p className="card-description">Descrição do produto...</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="caminho_da_imagem"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Nome do Produto</h3>
              <p className="card-price">R$ 99,99</p>
              <p className="card-description">Descrição do produto...</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="caminho_da_imagem"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Nome do Produto</h3>
              <p className="card-price">R$ 99,99</p>
              <p className="card-description">Descrição do produto...</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="caminho_da_imagem"
              alt="Imagem do Produto"
              className="card-img"
            />
            <div className="card-content">
              <h3 className="card-title">Nome do Produto</h3>
              <p className="card-price">R$ 99,99</p>
              <p className="card-description">Descrição do produto...</p>
              <div className="card-icons">
                <span className="heart-icon">&#10084;</span>
                <span className="cart-icon">&#128722;</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
