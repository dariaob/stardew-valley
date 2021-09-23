import React from "react";

//Класс, который определяет текущее время пользователя
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        //указываем изначальное состояние компонента (время, в которое человек зашёл на сайт)
        this.state = {date: new Date()}
    }

    //Обновляем состояние времени
    refreshTime() {
    this.timeId = setTimeout(() => {
            this.setState(
                {date : new Date()}
            )
        }, 1000)
    }

    //сбрасываем таймер
    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    //Функция выводит приветствие в зависимости от текущего времени пользователя
    CurrentTimeCounter = () => {
        //Получаем текущий час пользователя и преобразовываем в number. 
        let currentTime = parseFloat(this.state.date.getHours().toLocaleString())
        if (currentTime > 6 && currentTime < 12) {
            return (
                <div>
                    <h2>Доброе утро, фермер! Не забудь проверить предсказания на день.</h2>
                </div>
            )
        }
        else if (currentTime > 12 && currentTime < 18) {
            return (
                <div>
                    <h2>Добрый день, фермер! Настало время приключений! Не забывай подкрепиться.</h2>
                </div>
            )
        } else if (currentTime > 18 && currentTime < 23) {
            return (
                <div>
                    <h2>Приветствую, фермер. Вечер опасное время. Не забудь вовремя лечь спать.</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Доброй ночи, фермер. Если ты не спишь, то тебя ограбили.</h2>
                </div>
            )
        }
    }


    render() {
        return (
            <this.CurrentTimeCounter/>
        )
    }
}


