import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainMenu from "../../Components/Menu/MainMenu";
import OptionsMenu from "../../Components/Menu/OptionsMenu";
import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Container } from "../../styles/Pages/Maps";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import GeoJSON from "ol/format/GeoJSON";
import geoJsonData from "./desafio-front-2.json";
import api from "../../Services/api";
import { BsBorderStyle, BsFingerprint } from "react-icons/bs";
import { GrNext } from "react-icons/gr";

const Maps: React.FC = () => {
  const navigate = useNavigate();
  const [tooltipData, setTooltipData] = useState<
    { value: number; growth: number } | undefined
  >(undefined);

  const [tooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/signin");
      toast.error("Você precisa fazer login para acessar esta página.");
    }
  }, [navigate]);

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: new GeoJSON().readFeatures(geoJsonData, {
              dataProjection: "EPSG:4326",
              featureProjection: "EPSG:3857",
            }),
          }),
          style: new Style({
            fill: new Fill({
              color: "#5B4DA738",
            }),
            stroke: new Stroke({
              color: "#5B4DA7",
              width: 2,
            }),
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    map.on("pointermove", (event) => {
      const feature = map.forEachFeatureAtPixel(
        event.pixel,
        (feature) => feature,
      );
      if (feature && feature.getProperties().name) {
        api
          .get("/orders-month")
          .then((response) => {
            const data = response.data;
            setTooltipData(data);

            const tooltip = document.getElementById("tooltip");
            if (tooltip) {
              tooltip.style.display = "block";
              tooltip.style.left = event.pixel[0] + "px";
              tooltip.style.top = event.pixel[1] + "px";
            }
          })
          .catch((error) => {
            console.error("Erro ao carregar os dados do tooltip:", error);
          });
      } else {
        setTooltipData(undefined);

        const tooltip = document.getElementById("tooltip");
        if (tooltip) {
          tooltip.style.display = "none";
        }
      }
    });

    return () => {
      map.dispose();
    };
  }, []);

  return (
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
        <GridItem pl="2" className="nav" area={"nav"}>
          <OptionsMenu />
        </GridItem>
        <GridItem pl="5" area={"main"}>
          <h1>Regiões de entrega</h1>
          <div className="map-parent">
            <div id="map" className="map-container"></div>
            <div
              id="tooltip"
              style={{
                position: "absolute",
                display: tooltipData ? "block" : "none",
                background: "#FFFFFF",
                borderRadius: "10px",
                width: "458px",
                height: "300px",
                border: "1px solid #ccc",
                padding: "5px",
                zIndex: 100,
                pointerEvents: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                left: tooltipPosition.x + "px",
                top: tooltipPosition.y + "px",
              }}
              className="tooltip"
            >
              {tooltipData && (
                <div className="tooltip">
                  <h1>Pedidos realizados no mês</h1>
                  <Flex className="tooltip__flex">
                    <div className="tooltip__grid">
                      <div className="tooltip__value">
                        {" "}
                        <BsBorderStyle />
                        <h2>{tooltipData.value}</h2>
                      </div>
                      <p>Pedidos</p>
                    </div>
                    <div className="tooltip__grid">
                      <div className="tooltip__value">
                        <BsFingerprint />
                        <h2>{tooltipData.growth}</h2>
                      </div>
                      <p>Novos Clientes</p>
                    </div>
                  </Flex>
                  <Button>
                    Ver mais <GrNext />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Maps;
