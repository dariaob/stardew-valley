import React, {useState} from "react";

//принимает пути изображений
const ImageSlider = ({ image }) => {
    const [index, setIndex] = useState(0)
    //двигает слайды вправо
    const sliderRight = () => {
        setIndex((index + 1) % image.length)
    }
// проверяет, если индекс отрицательный,
//         то возвращает последний элемент из массива изображений, если нет,
//         то возвращает текущее
    const slideLeft = () => {
        const nextIndex = index - 1;

        if (nextIndex < 0) {
            setIndex(image.length - 1)
        } else {
            setIndex(nextIndex)
        }
    }
    return(
        <div>
            <button onClick={slideLeft} className={"btn btn-dark"}>{"<"}</button>
            <img src={image[index]} className={'rounded  h-50 w-50'} alt={[index]}/>
            <button onClick={sliderRight} className={'btn btn-dark'}>{">"}</button>
        </div>
    )

}

export default ImageSlider;