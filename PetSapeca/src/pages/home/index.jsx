// import { useUsers } from "../../hooks/useUsers"
// import { Box, Container, Flex, Spacer } from '@chakra-ui/react'
// import { Link } from "react-router-dom"
const Home = () => {
  // const { users, isLoading, isError, error } = useUsers()

  return (
    <header className="header-user">
      <nav>
        <ul>
        <li>
        <img src="/logo.svg" alt="Logo" />
        </li>
          <li>
            <a className="page-open" href="/home">Página Inicial</a>
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
    // <Container className="container-home">
    //     <Flex className="header" margin={1}>
    //         <Box>Pet Sapeca</Box>
    //         <Spacer />
    //         <Box>
    //             <Link to='/'>Pagina Principal</Link>
    //         </Box>
    //         <Box>
    //             <Link to='/cadastrar'>Favoritos</Link>
    //         </Box>
    //         <Box>
    //             <Link to='/cadastrar'>Carrinho</Link>
    //         </Box>
    //     </Flex>
    //     <h1>Lista de usuários</h1>
    //     <hr />
    //     {isLoading && <p>Carregando...</p>}
    //     {isError && <p>{error.message}</p>}
    //     <ul>
    //         {users?.map((user) => (
    //             <li key={user.id}>{user.name}</li>
    //         ))}
    //     </ul>
    // </Container>
  );
};

export default Home;
