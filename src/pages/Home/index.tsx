import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainMenu from "../../Components/Menu/MainMenu";
import OptionsMenu from "../../Components/Menu/OptionsMenu";
import {
  Text,
  CardHeader,
  Grid,
  GridItem,
  Card,
  Heading,
  CardBody,
  Center,
  Flex,
  Select,
} from "@chakra-ui/react";
import { Container } from "../../styles/Home";
import { TableComponets } from "../../Components/TableComponets/Table";
import api from "../../Services/api";
import { GraficOrdernsMonth } from "../../Components/Grafic/Orders/GraficOrdernsMonth";
import { GraficPlacedCanceled } from "../../Components/Grafic/Orders/GraficPlacedCanceled";
import { GraficExpectation } from "../../Components/Grafic/GraficExpectation";
import { AppWrapper } from "../../styles/Global";

interface Alert {
  type: string;
  value: number;
  since: string;
}
const Home: React.FC = () => {
  const [ordersSold, setOrderSsold] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [ticketmonth, seTicketmonth] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [ticketDay, setTicketDay] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [ordersMonth, setOrdersmonth] = useState<
    { value: number; growth: number } | undefined
  >(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/signin");
      toast.error("Você precisa fazer login para acessar esta página.");
    }
  }, [navigate]);

  useEffect(() => {
    const TicketMonth = async () => {
      const response = await api.get("/avg-ticket-month");
      const data = response.data;
      seTicketmonth(data);
    };
    TicketMonth();
  }, []);

  useEffect(() => {
    const TicketDay = async () => {
      const response = await api.get("/avg-ticket-day");
      const data = response.data;
      setTicketDay(data);
    };
    TicketDay();
  }, []);

  useEffect(() => {
    const Alerts = async () => {
      console.log(alerts);
      const response = await api.get("/alerts");
      const data = response.data;
      setAlerts(data);
    };
    Alerts();
  }, []);

  useEffect(() => {
    const OrdersMonth = async () => {
      const response = await api.get("/orders-month");
      const data = response.data;
      setOrdersmonth(data);
    };
    OrdersMonth();
  }, []);
  useEffect(() => {
    api
      .get("/orders-month")
      .then((response) => {
        setOrderSsold(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados dos pedidos:", error);
      });
  }, []);

  return (
    <AppWrapper>
      <Container>
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
          <GridItem className="nav" area={"nav"}>
            <OptionsMenu />
          </GridItem>
          <GridItem pl="5" area={"main"}>
            <h1>Início</h1>
            <div className="card-container">
              <Card className="cards-home">
                <CardHeader>
                  <Heading size="md">Ticket médio últimas 24h</Heading>
                </CardHeader>
                <CardBody className="cards-body-home">
                  {ticketDay ? (
                    <>
                      <Text className="grownt">{ticketDay.growth}%</Text>
                      <Text>em relação a ontem</Text>
                      <Flex>
                        <h4>R$</h4>
                        <strong>{ticketDay.value}</strong>
                      </Flex>
                    </>
                  ) : (
                    <p>Carregando...</p>
                  )}
                </CardBody>
              </Card>
              <Card className="cards-home">
                <CardHeader>
                  <Heading size="md">Ticket médio mensal</Heading>
                </CardHeader>
                <CardBody className="cards-body-home">
                  {ticketmonth ? (
                    <>
                      <Text className="grownt">{ticketmonth.growth}%</Text>
                      <Text>em relação a julho</Text>
                      <Flex>
                        <h4>R$</h4>
                        <strong>{ticketmonth.value}</strong>
                      </Flex>
                    </>
                  ) : (
                    <p>Carregando...</p>
                  )}
                </CardBody>
              </Card>
              {alerts.map((alert, index) => (
                <Card key={index} className="cards-home">
                  <CardHeader>
                    <Heading size="md">{alert.type}</Heading>
                  </CardHeader>
                  <CardBody className="cards-body-home">
                    {index === 0 ? (
                      <>
                        <Text className="alerts">{alert.since}</Text>
                        <Flex>
                          <strong>{alert.value}</strong>
                          <h4>Produtos</h4>
                        </Flex>
                      </>
                    ) : index === 1 ? (
                      <>
                        <Text className="alerts">{alert.since}</Text>
                        <Text className="alerts">repor o quanto antes</Text>
                        <Flex>
                          <strong>{alert.value}</strong>
                          <h4>Produtos</h4>
                        </Flex>
                      </>
                    ) : (
                      <p>Carregando...</p>
                    )}
                  </CardBody>
                </Card>
              ))}
              <Card className="cards-home">
                <CardHeader>
                  <Heading size="md">Pedidos realizados no mês </Heading>
                </CardHeader>
                <CardBody className="cards-body-home">
                  {ordersMonth ? (
                    <>
                      <Text className="grownt">{ordersMonth.growth}</Text>
                      <Text>em relação a julho</Text>
                      <Flex>
                        <strong>{ordersMonth.value}</strong>
                        <h4>Pedidos</h4>
                      </Flex>
                    </>
                  ) : (
                    <p>Carregando...</p>
                  )}
                </CardBody>
              </Card>
              <Card className="cards-home">
                <CardHeader>
                  <Heading size="md">Produtos vendidos no mês</Heading>
                </CardHeader>
                <CardBody className="cards-body-home">
                  {ordersSold ? (
                    <>
                      <Text className="grownt">{ordersSold.growth}</Text>
                      <Text>em relação a julho</Text>
                      <Flex>
                        <strong>{ordersSold.value}</strong>
                        <h4>Pedidos</h4>
                      </Flex>
                    </>
                  ) : (
                    <p>Carregando...</p>
                  )}

                  <h4></h4>
                </CardBody>
              </Card>
            </div>
            <h3>Dashboard de vendas</h3>
            <div className="card-container-grafic">
              <Card className="cards-grafic">
                <div className="input-grafic">
                  <Heading size="md"> Pedidos por Mês</Heading>
                  <Select name="Categorias" required>
                    <option value="Raiz">Ano</option>
                  </Select>
                </div>
                <CardBody className="cards-grafic">
                  <div className="chart">
                    {" "}
                    <div style={{ height: "200px", width: "400px" }}>
                      <GraficOrdernsMonth />
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="cards-grafic">
                <div className="input-grafic">
                  <Heading size="md">
                    {" "}
                    Expectativa de lucro x lucro real
                  </Heading>
                  <Select name="Categorias" required>
                    <option value="Raiz">Ano</option>
                  </Select>
                </div>
                <CardBody className="cards-grafic">
                  <div style={{ height: "200px", width: "400px" }}>
                    <GraficExpectation />
                  </div>
                </CardBody>
              </Card>
              <Card className="cards-grafic">
                <div>
                  <Heading size="md" style={{ marginTop: "20px" }}>
                    Pedidos realizados x pedidos cancelados
                  </Heading>
                </div>
                <CardBody className="cards-grafic">
                  <div style={{ height: "205px", width: "400px" }}>
                    <GraficPlacedCanceled />
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="card-container">
              <Card className="card-products">
                <div className="card-products-container">
                  <Center>
                    <TableComponets />
                  </Center>
                </div>
              </Card>
            </div>
          </GridItem>
        </Grid>
      </Container>
    </AppWrapper>
  );
};

export default Home;
