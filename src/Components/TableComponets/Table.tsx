import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Container } from "./styles";
import api from "../../Services/api";
export interface Produto {
  id: number;
  name: string;
  color: string;
  description: string;
  status: string;
}

export const TableComponets: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [currentpage, setCurretPage] = useState(1);
  const [limitpage] = useState(10);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/products?page=${currentpage}&limit=${limitpage}`,
        );
        if (response.status !== 200) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        const data = response.data;
        setProdutos(data);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };
    fetchData();
  }, [currentpage, limitpage]);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(filtro.toLowerCase()),
  );

  function nextPage() {
    setCurretPage(currentpage + 1);
  }

  function prevPage() {
    if (currentpage > 1) {
      setCurretPage(currentpage - 1);
    }
  }

  function handleFiltroChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFiltro(event.target.value);
    setCurretPage(1);
  }

  return (
    <Container>
      <Flex>
        <h2>Lista de Produtos</h2>
        <Spacer />
        <Stack direction="row">
          <Flex align="center">
            <Flex align="center">
              <InputGroup className="search" size="md">
                <Input
                  placeholder="Pesquisar produtos"
                  value={filtro}
                  onChange={handleFiltroChange}
                />
                <InputRightElement>
                  <Button h="1.75rem" size="sm">
                    <AiOutlineSearch />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <TableContainer>
        <Flex>
          {" "}
          <div className="table-products">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <div className="border-table">
                    <Th>Produtos</Th>
                    <Th>Cores</Th>
                    <Th>Descrição</Th>
                    <Th isNumeric>Status</Th>
                  </div>
                </Tr>
              </Thead>
              <Tbody>
                {produtosFiltrados.map((produto) => (
                  <Tr key={produto.id}>
                    <div className="table-infor">
                      <Td className="td-space">{produto.name}</Td>
                      <Td className="td-space">{produto.color}</Td>
                      <Td className="td-space-description">
                        <div className="tag-container">
                          <Td className="tag">{produto.description}</Td>
                        </div>
                      </Td>
                      <Td className="td-space" isNumeric>
                        {produto.status}
                      </Td>
                    </div>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </Flex>
      </TableContainer>
      <div className="button-next-page">
        <span>{currentpage} de 40</span>
        <button onClick={prevPage}>
          <GrPrevious />
        </button>
        <button onClick={nextPage}>
          <GrNext />
        </button>
      </div>
    </Container>
  );
};
