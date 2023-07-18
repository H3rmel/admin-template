import { errors } from "@/constants/error.json";

const handleErrorCode = (e: string) => {
  const message = errors.find((error) => error.code === e);
  return message?.meaning;
};

export { handleErrorCode };
