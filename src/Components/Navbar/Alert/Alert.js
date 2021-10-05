import React from 'react'
import { useAlert } from './AlertContext'

//использует кастомный хук чтобы присвоить контекст. Проверяет состояние  чтобы вывести объявление на экран
const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div className='alert alert-danger'>
            <p>Hey everyone,

                I know you’ve all been waiting a while for the 1.5 update for Stardew Valley on mobile. While it is underway, it may be a while off yet. The main reason for this is that I had to get someone new to port the 1.5 update to mobile versions of the game, which has caused the mobile update to take much longer than it originally would have. Finding someone new to do the port took some time, but it was necessary.

                I appreciate your trust and patience, and want to assure you that I’m doing everything within my power to get the 1.5 update out to you all as soon as possible.

                -Ape</p>
        </div>
    )
}

export default Alert
