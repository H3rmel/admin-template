//#region Imports

import { ChangeEvent, useEffect, useState } from "react";

import Image from "next/image";

import {
  Card,
  CardBody,
  Center,
  Flex,
  useColorModeValue,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Divider,
  CardFooter,
  HStack,
} from "@chakra-ui/react";

import { GoogleLogo } from "@phosphor-icons/react";

import {
  InputPassword,
  AuthModeToggle,
  ToggleColorMode,
} from "@/components/Index";

import {
  sxAuthPage,
  sxAuthLogin,
  sxAuthBanner,
  sxToggleColorMode,
} from "@/styles/authentication";

//#endregion

export default function Authentication() {
  const [mode, setMode] = useState<Mode>("login");
  const [user, setUser] = useState<User>({});

  const color = useColorModeValue("light.500", "dark.500");

  //#region Methods

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  // * Just testing the useState, ! Need to remove later !
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  //#endregion

  return (
    <Flex sx={sxAuthPage} color={color} bgColor={color!}>
      <ToggleColorMode sx={sxToggleColorMode} />
      <Center sx={sxAuthLogin}>
        <Card w="md">
          <CardBody>
            <Heading mb={4} textAlign="center">
              {mode === "login" ? "Bem-vindo de volta!" : "Crie sua conta!"}
            </Heading>
            <FormControl>
              <FormLabel>E-mail:</FormLabel>
              <Input
                type="email"
                name="email"
                value={user?.email}
                placeholder="Insira seu e-mail..."
                required
                onChange={handleChange}
              />
              <FormHelperText />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <InputPassword
                value={user?.password}
                required
                valueChange={handleChange}
              />
              <FormHelperText />
            </FormControl>
          </CardBody>
          <Divider borderColor={color} />
          <CardFooter flexDirection="column" gap={4}>
            <HStack gap={4}>
              <Button w="50%" colorScheme="primary">
                {mode === "login" ? "Entrar" : "Cadastrar"}
              </Button>
              <Button w="50%" colorScheme="red">
                <GoogleLogo size={24} weight="bold" />
              </Button>
            </HStack>
            <AuthModeToggle mode={mode} setMode={setMode} />
          </CardFooter>
        </Card>
      </Center>
      <Center sx={sxAuthBanner}>
        <Image
          src="/logo.svg"
          alt="Admin template's logo"
          width={128}
          height={128}
        />
      </Center>
    </Flex>
  );
}
