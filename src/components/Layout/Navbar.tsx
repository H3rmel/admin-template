import { default as NextLink } from "next/link";

import { ToggleColorMode, Drawer } from "../Index";

import {
  HStack,
  Container,
  Menu,
  MenuList,
  MenuItem,
  Avatar,
  MenuButton,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { SignOut } from "@phosphor-icons/react";

export function Navbar({ sxStack, sxContainer }: NavbarLayoutProps) {
  const bgColor = useColorModeValue("primary.700", "dark.600");

  return (
    <HStack sx={sxStack} color="white" bgColor={bgColor}>
      <Container sx={sxContainer}>
        <Drawer />
        <HStack gap="2">
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
                <Link as={NextLink} w="100%" href="/profile">
                  Perfil
                </Link>
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
