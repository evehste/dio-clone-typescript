import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleSignIn, SubtitleSignIn, Wrapper, DescriptionSignIn, CriarText, Row} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const templateMessagens = {
    "min": "deve conter no mínimo 3 caracteres.",
    "required": "Este é um campo obrigatório.",
    "invalid": "não é um campo válido."
}

const schema = yup.object({
    name: yup.string().min(3, `Nome ${templateMessagens.min}`).required(templateMessagens.required),
    email: yup.string().email(`Email ${templateMessagens.invalid}`).required(templateMessagens.required),
    password: yup.string().min(3, `Senha ${templateMessagens.min}`).required(templateMessagens.required),
  }).required();

const SignIn = () => {

    const { control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleSignIn>Comece agora grátis</TitleSignIn>
                <SubtitleSignIn>Crie sua conta e make the change._</SubtitleSignIn>
                <form>
                <Input placeholder="Nome Completo" leftIcon={<MdEmail />} name="name" control={control}
                    errorMessage={errors?.name?.message}
                    />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control}
                   
                    />
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password"  control={control} 
                   
                     />
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>

                </form>
                <Row>
                    <DescriptionSignIn>Ao clicar em criar minha conta grátis.
                    declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</DescriptionSignIn>
                    <DescriptionSignIn>Já tenho uma conta. <CriarText>Fazer Login</CriarText></DescriptionSignIn>
                   
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignIn }