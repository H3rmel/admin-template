import Link from "next/link";

import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { List, SignOut } from "@phosphor-icons/react";

export function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Toggle Drawer"
        onClick={onOpen}
        icon={<List size={24} />}
      />
      <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Admin Template</DrawerHeader>
          <DrawerBody>
            <Stack gap={2}>
              <Button as={Link} href="/">
                Home
              </Button>
              <Button as={Link} href="/settings">
                Configurações
              </Button>
              <Button as={Link} href="/notifications">
                Notificações
              </Button>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="red" gap="2">
              Sair <SignOut weight="bold" size={18} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
