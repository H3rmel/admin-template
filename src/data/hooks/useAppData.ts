import { useContext } from "react";

import AppContext from "@/data/contexts/AppContext";

export const useAppData = () => useContext(AppContext);
