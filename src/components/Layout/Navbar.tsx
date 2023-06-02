import {default as NextLink} from "next/link";

import { ToggleColorMode, Drawer } from "../Index";

import {
  HStack,
  Container,
  Menu,
  MenuList,
  MenuItem,
  Avatar,
  MenuButton,
  Link
} from "@chakra-ui/react";

import { SignOut } from "@phosphor-icons/react";

export function Navbar({ sxStack, sxContainer }: NavbarLayoutProps) {
  return (
    <HStack sx={sxStack}>
      <Container sx={sxContainer}>
        <Drawer />
        <HStack>
          <ToggleColorMode size="sm" />
          <Menu>
            <MenuButton>
              <Avatar
                size="md"
                name="John Doe"
                src="./avatar-placeholder.png"
              ></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link as={NextLink} w="100%" href="/profile">Perfil</Link>
              </MenuItem>
              <MenuItem gap="2">
                Sair <SignOut weight="bold" size={16} />
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </HStack>
  );
}
