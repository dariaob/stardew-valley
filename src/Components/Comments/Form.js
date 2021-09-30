import React, { useState } from "react";

const Form = () => {
  //Состояния, в которых будут храниться имена пользователей и комментарии
  const [names, setName] = useState([]);
  const [comments, setComment] = useState([]);

  //рефы, которые хранят данные из форм
  let useTextRef = React.createRef();
  let useNameRef = React.createRef();

  //сохраняет данные из форм в массив
  let handleChange = () => {
    let comment = useTextRef.current.value;
    let values = [...comments, comment];
    setComment(values);

    let name = useNameRef.current.value;
    let namesArray = [...names, name];
    setName(namesArray);
  };

  //выводит имена из массива
  let nameField = names.map((item, index) => {
    return (
      <div key={index.toString()} className="nameField">
        {item}
      </div>
    );
  });

  //выводит комментарии из массива
  let commentField = comments.map((item, index) => {
    return (
      <div key={index.toString()} className="commentField">
        {item}
      </div>
    );
  });

  return (
    <>
      {/*Поле для имени*/}
      <label htmlFor="name">Имя</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Имя"
        ref={useNameRef}
      />

      {/*поле для комментария*/}
      <label htmlFor="comment">Комментарий</label>
      <textarea
        name="comment"
        id="comment"
        placeholder="Комментарий"
        ref={useTextRef}
      />

      {/*//кнопка для сохранения данных в массив*/}
      <button onClick={handleChange}>Отправить</button>

      <div className="commentField">
        {" "}
        {nameField} {commentField}{" "}
      </div>
    </>
  );
};

export default Form;