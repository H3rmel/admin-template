import {
  IconButton,
  SystemStyleObject,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";

interface ToggleColorModeProps {
  sx?: SystemStyleObject;
}

export function ToggleColorMode({ sx }: ToggleColorModeProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("dark.500", "light.500");

  return (
    <IconButton
      sx={sx}
      onClick={toggleColorMode}
      aria-label="Toggle Color mode"
      color={color}
      borderRadius="full"
      icon={colorMode === "light" ? <Sun size={24} /> : <Moon size={24} />}
    />
  );
}
