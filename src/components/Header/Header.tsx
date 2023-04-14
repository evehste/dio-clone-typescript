import logo from '../../assets/logo-dio.png';
import { Button } from '../Button/Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, handleSignOut} = useAuth();

  return (
    <Wrapper>
      <Container>
          <Row>
            <Link to="/">
              <img src={logo} alt="Logo da dio"/>
            </Link>
              { user.id &&
                <>
                  <BuscarInputContainer>
                  <Input placeholder='Buscar...'/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                </>}
          </Row>
          <Row>
            { user.id ?(
              <>
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                <Link to="/" onClick={handleSignOut}>Sair</Link>
              </>
            ) :
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            }
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }