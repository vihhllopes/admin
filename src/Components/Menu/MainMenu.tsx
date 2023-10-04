import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Container } from "./Menu";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const MainMenu: React.FC = () => {
  const { permissions, signOut } = useAuth();
  const navigate = useNavigate();
  const handlesignOut = () => {
    signOut();
    navigate("/signin");
  };
  return (
    <Container>
      <Flex>
        <img src="images/logo.svg" className="logo" />
        <Spacer />
        <Stack direction="row">
          <Flex align="center">
            <Menu isLazy>
              <Text>Eduardo</Text>
              <MenuButton className="avatar">
                <Avatar name="Eduardo" style={{ backgroundColor: "#a59fc8" }} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {" "}
                  {permissions && <Button onClick={handlesignOut}>Sair</Button>}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
};

export default MainMenu;
