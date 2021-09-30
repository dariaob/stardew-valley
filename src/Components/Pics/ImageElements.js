import React from "react";

//массив с адресами картинок и их описанием
const images = [
  {
    image:
      "https://static01.nyt.com/images/2021/05/02/arts/02STARDEW-VALLEY2a/02STARDEW-VALLEY2a-mediumSquareAt3X.jpg",
    label: "Скриншот летних грядок с подсолнухами",
    id: 1,
  },
  {
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b9/Marriage_abigail.png",
    label: "Картинка со свадьбы",
    id: 2,
  },
  {
    image: "https://i.ytimg.com/vi/2USf29KvPdg/maxresdefault.jpg",
    label: "Рыбалка",
    id: 3,
  },
  {
    image:
      "https://queerlyrepresent.files.wordpress.com/2016/05/character-creators.jpg",
    label: "Создание персонажа",
    id: 4,
  },
  {
    image: "https://i.ytimg.com/vi/Eij9swyIKDo/maxresdefault.jpg",
    label: "Добыча ископаемых и борьба с монстрами",
    id: "5",
  },
  {
    image: "https://i.redd.it/wz9mciuxxsi01.jpg",
    label: "Крафт",
    id: 6,
  },
];

//выводит картинки на экран
let ShowImages = () => {
  let pic = images.map((image, id) => {
    return (
      <img src={image.image.toString()} alt={image.label.toString()} key={id} />
    );
  });
  return <div className="pic">{pic}</div>;
};

class Pics extends React.Component {
  render() {
    let pics = this.props;
    return (
      <div className="screens">
        <ShowImages pics={pics} />
      </div>
    );
  }
}

export default Pics;
