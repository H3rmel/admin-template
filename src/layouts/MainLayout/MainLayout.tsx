import Head from "next/head";

import { Box, useColorModeValue } from "@chakra-ui/react";

import { Navbar } from "@/components/Index";

import {
  sxLayoutBox,
  sxLayoutNavbarStack,
  sxLayoutNavbarContainer,
} from "@/styles/mainLayout";

export function MainLayout({ title, children }: MainLayoutProps) {
  const color = useColorModeValue("light.500", "dark.500");

  return (
    <>
      <Head>
        <title>{title} | Admin Template</title>
      </Head>
      <Box sx={sxLayoutBox} color={color} bgColor={color!}>
        <Navbar
          sxStack={sxLayoutNavbarStack}
          sxContainer={sxLayoutNavbarContainer}
        />
        <Box p={8}>{children}</Box>
      </Box>
    </>
  );
}
