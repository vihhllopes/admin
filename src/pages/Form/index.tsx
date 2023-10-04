import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainMenu from "../../Components/Menu/MainMenu";
import OptionsMenu from "../../Components/Menu/OptionsMenu";
import {
  Grid,
  GridItem,
  Card,
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Select,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import { Container } from "../../styles/Pages/Form";
import api from "../../Services/api";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    nome: undefined,
    code: undefined,
    productId: undefined,
    seller: undefined,
    deliveryDate: undefined,
    specificationsSubtitle: undefined,
    specificationsInfo: undefined,
    specificationsCares: undefined,
    categories: [""],
    tags: [""],
    id: undefined,
    items: [
      {
        code: "",
        color: "",
        size: { width: 0, height: 0, length: 0 },
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: [value],
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (
      !values.nome ||
      !values.code ||
      !values.productId ||
      !values.seller ||
      !values.deliveryDate ||
      !values.specificationsCares ||
      !values.specificationsInfo ||
      !values.specificationsSubtitle
    ) {
      toast.error("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }
    try {
      await api.post("/create-product", values);
      toast.success("Sucesso, Produto Criado!");
    } catch (error) {
      console.error("Erro ao criar o produto", error);
      toast.error("Erro ao criar o produto");
    }
    setLoading(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/signin");
      toast.error("Você precisa fazer login para acessar esta página.");
    }
  }, [navigate]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"100px 6fr 100px"}
          gridTemplateColumns={"150px 1fr"}
          h="700px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem area={"header"}>
            <MainMenu />
          </GridItem>
          <GridItem pl="2" className="nav" area={"nav"}>
            <OptionsMenu />
          </GridItem>
          <GridItem pl="5" area={"main"}>
            <h1>Adicionar produto</h1>
            <Card className="card-form">
              <Center>
                <Grid
                  h="300px"
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  gap={4}
                >
                  <GridItem rowSpan={1} colSpan={1}>
                    <Box p={4} className="form-products">
                      <Heading mb={4}>Detalhes</Heading>
                      <VStack spacing={4} align="stretch">
                        <FormControl id="nome" className="input-products">
                          <FormLabel>Nome:</FormLabel>
                          <Input
                            type="text"
                            name="nome"
                            float="right"
                            value={values.nome}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="productId" className="input-products">
                          <FormLabel>ID:*</FormLabel>
                          <Input
                            type="text"
                            name="productId"
                            value={values.productId}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="code" className="input-products">
                          <FormLabel>Código:*</FormLabel>
                          <Input
                            type="text"
                            name="code"
                            value={values.code}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="seller" className="input-products">
                          <FormLabel>Seller:*</FormLabel>
                          <Input
                            type="text"
                            name="seller"
                            textAlign="right"
                            value={values.seller}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl
                          id="deliveryDate"
                          className="input-products"
                        >
                          <FormLabel>Prazo de entrega:*</FormLabel>
                          <Input
                            type="text"
                            name="deliveryDate"
                            value={values.deliveryDate}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Box p={4} className="form-products">
                      <Heading mb={4}>Categorias*</Heading>
                      <VStack spacing={4} align="stretch">
                        <FormControl id="categories" className="input-products">
                          <Select
                            name="categories"
                            value={values.categories[0]}
                            onChange={handleSelectChange}
                          >
                            <option value="Selecionar categoria">
                              Selecionar categorias
                            </option>
                            <option value="category1">Categoria 1</option>
                            <option value="category2">Categoria 2</option>
                          </Select>
                        </FormControl>
                      </VStack>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    {" "}
                    <Box p={4} className="form-products">
                      <Heading mb={4}>Tags*</Heading>
                      <VStack spacing={4} align="stretch">
                        <FormControl id="tags" className="input-products">
                          <Select
                            name="tags"
                            value={values.tags[0]}
                            onChange={handleSelectChange}
                          >
                            <option value="Selecionar tags">
                              Selecionar Tags
                            </option>
                            <option value="Tag1">1</option>
                            <option value="Tag2">2</option>
                          </Select>
                        </FormControl>
                      </VStack>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={4}>
                    {" "}
                    <Box p={4} className="form-products">
                      <Heading mb={4}>Especificações</Heading>
                      <VStack spacing={4} align="stretch">
                        <FormControl
                          id="specificationsSubtitle"
                          className="input-specification"
                        >
                          <FormLabel>Subtítulo:*</FormLabel>
                          <Input
                            type="text"
                            name="specificationsSubtitle"
                            value={values.specificationsSubtitle}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl
                          id="specificationsInfo"
                          className="input-specification"
                        >
                          <FormLabel>informações:*</FormLabel>
                          <Input
                            type="text"
                            name="specificationsInfo"
                            className="largeTextField"
                            value={values.specificationsInfo}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl
                          id="specificationsCares"
                          className="input-specification"
                        >
                          <FormLabel>Limpeza e cuidados:*</FormLabel>
                          <Input
                            type="text"
                            name="specificationsCares"
                            className="largeTextField"
                            value={values.specificationsCares}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </VStack>
                    </Box>
                  </GridItem>
                </Grid>
              </Center>
            </Card>
            <Card className="card-itens">
              <Grid
                h="300px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
              >
                <GridItem colSpan={4}>
                  {" "}
                  <Box p={4}>
                    <Flex className="head-itens">
                      {" "}
                      <Heading mb={4}>itens</Heading>
                      <button className="button-itens">
                        <BsPlusLg />
                        Adicionar
                      </button>
                    </Flex>

                    <VStack spacing={4} align="stretch">
                      <FormControl id="chakra" className="input-itens">
                        <FormLabel>Item 01</FormLabel>
                        <hr />
                      </FormControl>
                      <div className="grid-itens">
                        <FormControl id="chakra" className="input-itens">
                          <FormLabel>Código:</FormLabel>
                          <Input type="text" name="descricao" />
                        </FormControl>
                        <FormControl id="chakra" className="input-itens">
                          <FormLabel>Cor:</FormLabel>
                          <Input type="text" name="descricao" />
                        </FormControl>

                        <FormControl id="chakra" className="input-itens">
                          <FormLabel>Tamanho:</FormLabel>
                          <Input
                            type="text"
                            name="descricao"
                            className="input-itens__tamanho"
                          />
                          <FormLabel>mx</FormLabel>
                          <Input
                            type="text"
                            name="descricao"
                            className="input-itens__tamanho"
                          />
                          <FormLabel>mx</FormLabel>
                          <Input
                            type="text"
                            name="descricao"
                            className="input-itens__tamanho"
                          />
                          <FormLabel>m</FormLabel>
                        </FormControl>
                      </div>
                    </VStack>
                  </Box>
                </GridItem>{" "}
              </Grid>
            </Card>
            <div className="button-form">
              <Button type="submit" className="button-form__cancel">
                Cancelar
              </Button>
              <Button
                type="submit"
                className="button-form__submit"
                disabled={loading}
              >
                Enviar
              </Button>
            </div>
          </GridItem>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
