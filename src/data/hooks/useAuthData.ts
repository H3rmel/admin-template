import { useContext } from "react";

import AuthContext from "@/data/contexts/AuthContext";

export const useAuthData = () => useContext(AuthContext);
