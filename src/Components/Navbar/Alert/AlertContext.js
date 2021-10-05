import React, { useContext, useState } from "react";

//Создаем контекст
const AlertContext = React.createContext();

//передаём его в хук, чтобы не передавать напрямую
export const useAlert = () => {
    return useContext(AlertContext);
};

//Контекст провайдер. Создаёт состояние alert, которое отвечает за открытие/скрытие объявления
const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);

    const toggle = () => setAlert((prev) => !prev);

    return (
        <AlertContext.Provider
            value={{
                visible: alert,
                toggle,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};

export default AlertProvider;
