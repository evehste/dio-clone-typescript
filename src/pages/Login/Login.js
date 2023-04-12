import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, ErrorText } from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("Campo e-mail não é válido").required("Este é um campo obrigatório"),
    password: yup.string().min(3, "Senha deve conter no mínimo 3 caracteres").required("Este é um campo obrigatório"),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid  } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed');
            }else {
                alert("E-mail ou senha inválido!");
            }
        }
        catch{
            alert("Houve um erro! Tente novamente.");
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control}
                    errorMessage={errors?.email?.message}
                    />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password"  control={control} 
                    errorMessage={errors?.password?.message}
                     />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }