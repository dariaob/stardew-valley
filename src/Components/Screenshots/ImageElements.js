import React from "react";

//Массив картинок с описанием, чтобы их вывести в таблицу
const screenshots = [{
    image: 'https://static01.nyt.com/images/2021/05/02/arts/02STARDEW-VALLEY2a/02STARDEW-VALLEY2a-mediumSquareAt3X.jpg',
    alt: 'Скриншот летних грядок с подсолнухами',
    id: 1
}, {
    image: 'https://stardewvalleywiki.com/mediawiki/images/b/b9/Marriage_abigail.png',
    alt: 'Картинка со свадьбы',
    id: 2
}, {
    image: 'https://i.ytimg.com/vi/2USf29KvPdg/maxresdefault.jpg',
    alt: 'Рыбалка',
    id: 3
}, {
    image: 'https://queerlyrepresent.files.wordpress.com/2016/05/character-creators.jpg',
    alt: 'Создание персонажа',
    id: 4
},
    {
        image: 'https://i.ytimg.com/vi/Eij9swyIKDo/maxresdefault.jpg',
        alt: 'Добыча ископаемых и борьба с монстрами',
        id: '5'
    },
    {
        image: 'https://i.redd.it/wz9mciuxxsi01.jpg',
        alt: 'Крафт',
        id: 6
    },
    {
        image: 'https://stardewcommunitywiki.com/mediawiki/images/f/fd/Wilderness_Farm.png',
        alt: 'Ферма',
        id: 7
    }
]


function ShowImage(props) {
    return null;
}

class Screens extends React.Component {
    render() {
        return (
            <ShowImage/>
        )
    }
}

export default Screens;