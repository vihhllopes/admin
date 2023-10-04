import React, { useState } from "react";
import { AppWrapper } from "../../styles/Global";
import { Container } from "../../styles/Pages/Login";
import { toast } from "react-toastify";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { permissions, signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    if (!email || !senha) {
      toast.error("Preencha Todos os campos");
      return;
    }
    setIsLoading(true);
    try {
      if (email === "edu@edu.com" && senha === "1234") {
        await signIn(email, senha);
        navigate("/");
        toast.success("Bem vindo de volta!");
      } else {
        toast.error("Credenciais incorretas");
      }
    } catch (error) {
      toast.error("Erro ao fazer login");
    } finally {
      setIsLoading(false);
    }
  };
  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  if (permissions) {
    navigate("/");
    return null;
  }

  return (
    <AppWrapper>
      <Container className="container">
        <img src="images/logo.svg" className="logo" />
        <div className="input-login">
          <Stack spacing={4} className="input-login">
            <h3>Entrar na Plataforma</h3>
            <Text>E-mail:</Text>
            <InputGroup>
              <Input
                type="tel"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <Text>Senha:</Text>
            <InputGroup>
              <Input
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={PasswordVisibility}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button className="button-login" onClick={handleSignIn}>
              {isLoading ? <Spinner /> : "Entrar"}
            </Button>
          </Stack>
        </div>
      </Container>
    </AppWrapper>
  );
};

export default Login;
