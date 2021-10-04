import React, { useEffect, useState } from "react";
import CurrentTimeCounter from "./CurrentTimeCounter";

//Класс, который определяет текущее время пользователя
export const FarmerTime = () => {
  //указываем изначальное состояние компонента (время, в которое человек зашёл на сайт)
  const [date, setDate] = useState(new Date());

  //Обновляем состояние времени
  function refreshTime() {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }

  useEffect(refreshTime, [date]);

  //Функция выводит приветствие в зависимости от текущего времени пользователя

  return <CurrentTimeCounter date={date} />;
};
