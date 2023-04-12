import logo from '../../assets/logo-dio.png';
import { Button } from '../Button/Button';
import IHeader from './IHeader';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado} :IHeader) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
              { autenticado &&
                <>
                  <BuscarInputContainer>
                  <Input placeholder='Buscar...'/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                </>}
          </Row>
          <Row>
            { autenticado ?(
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
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