//#region Imports

import { ChangeEvent, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

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
  useToast,
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

import { initFirebase } from "@/firebase/firebaseApp";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

//#endregion

export default function Authentication() {
  const [mode, setMode] = useState<Mode>("login");
  const [user, setUser] = useState<User>({});

  const router = useRouter();

  const color = useColorModeValue("light.500", "dark.500");
  const toast = useToast();

  //* Handle all inputs changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //* Google Authentication Code
  initFirebase();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [userAuth] = useAuthState(auth);

  if (userAuth) {
    router.push("/");
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      toast({
        title: "Logado com sucesso!",
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } catch (error) {
      toast({
        title: `Erro!`,
        description: `Um erro ocorreu! Informações: ${error}`,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Head>
        <title>
          {mode === "login" ? "Bem-vindo de volta!" : "Crie sua conta!"}
        </title>
      </Head>
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
                {/* On Click here */}
                <Button w="50%" colorScheme="red" onClick={signInWithGoogle}>
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
    </>
  );
}
