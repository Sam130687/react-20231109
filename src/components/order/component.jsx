import { useCallback } from "react";
import { useState } from "react";
import { OrderContext } from "./context";

export const OrderProvider = ({ children }) => {
  const [forms, setForms] = useState({ theme: "light" });

  const setTheme = useCallback(
    (theme) => setForms((currentForm) => ({
        ...currentForm,
        theme
    })),
    []
  );

  return (
    <OrderContext.Provider value={{ forms, setTheme }}>
      {children}
    </OrderContext.Provider>
  );
};