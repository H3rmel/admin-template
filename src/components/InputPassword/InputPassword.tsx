import { useState, Dispatch, SetStateAction } from "react";

import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

import { Eye, EyeSlash } from "@phosphor-icons/react";

interface InputPasswordProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function InputPassword({ value, setValue }: InputPasswordProps) {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <InputGroup>
      <Input
        type={show ? "text" : "password"}
        placeholder="Insira sua senha..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputRightElement>
        <IconButton
          onClick={handleClick}
          aria-label="Toggle password input"
          icon={show ? <Eye size={20} /> : <EyeSlash size={20} />}
        />
      </InputRightElement>
    </InputGroup>
  );
}
