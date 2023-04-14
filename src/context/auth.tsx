import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./IAuth";
import { IUser } from "../types/IUser";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try{
            const { data } = await api.get(`users?email=${loginData.email}&senha=${loginData.password}`);
            if(data.length === 1){
                setUser(data[0]);
                navigate('/feed');
            }else {
                alert("E-mail ou senha inválido!");
            }
        }
        catch{
            alert("Houve um erro! Tente novamente.");
        }
    }

    const handleSignOut = () => {
        setUser({} as IUser);

    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )

}