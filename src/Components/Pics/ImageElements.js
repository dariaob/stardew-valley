import React, {useEffect, useState} from "react";
import ImageSlider from "./ImageSlider";

//массив с адресами картинок и их описанием
const images = [
  {
    image:
      "https://static01.nyt.com/images/2021/05/02/arts/02STARDEW-VALLEY2a/02STARDEW-VALLEY2a-mediumSquareAt3X.jpg",
  },
  {
    image:
      "https://stardewvalleywiki.com/mediawiki/images/b/b9/Marriage_abigail.png",

  },
  {
    image: "https://i.ytimg.com/vi/2USf29KvPdg/maxresdefault.jpg",

  },
  {
    image:
      "https://queerlyrepresent.files.wordpress.com/2016/05/character-creators.jpg",

  },
  {
    image: "https://i.ytimg.com/vi/Eij9swyIKDo/maxresdefault.jpg",

  },
  {
    image: "https://i.redd.it/wz9mciuxxsi01.jpg",
  },
];

//добавляет картинки в массив state

const Pics = () => {
  const [image, setImage] = useState([]);

  const ShowImages = () => {
    setImage(images.map((item) => item.image));
  };

  //один раз запускает функцию, которая добавляет путь картинок из массива в state
  useEffect(ShowImages, [])

  return (
    <>
      <ImageSlider image={image} />
    </>
  );
};

export default Pics;
