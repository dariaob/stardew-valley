import React from "react";

const CurrentTimeCounter = ({date}) => {
    //Получаем текущий час пользователя и преобразовываем в number.
    let currentTime = parseFloat(date.getHours().toLocaleString());
    if (currentTime > 6 && currentTime < 12) {
        return (
            <div>
                <h2>
                    Доброе утро, фермер! Не забудь проверить предсказания на день.
                </h2>
            </div>
        );
    } else if (currentTime > 12 && currentTime < 18) {
        return (
            <div>
                <h2>
                    Добрый день, фермер! Настало время приключений! Не забывай
                    подкрепиться.
                </h2>
            </div>
        );
    } else if (currentTime > 18 && currentTime < 23) {
        return (
            <div>
                <h2>
                    Приветствую, фермер. Вечер опасное время. Не забудь вовремя лечь
                    спать.
                </h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Доброй ночи, фермер. Если ты не спишь, то тебя ограбили.</h2>
            </div>
        );
    }
};

export default CurrentTimeCounter;