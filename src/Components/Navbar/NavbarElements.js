import React from 'react'
import { useAlert } from './Alert/AlertContext'

const Main = () => {
    const {toggle} = useAlert()
    return (
        <div>
            <h1>Последнее объявление</h1>
            <button onClick={toggle} className='btn btn-dark'>Посмотреть объявление</button>
        </div>
    )
}

export default Main
