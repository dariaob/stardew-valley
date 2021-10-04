import React, { useState } from "react";
import { Button, Col, FormText } from "react-bootstrap";

const Form = () => {
  //Состояния, в которых будут храниться имена пользователей и комментарии
  const [names, setName] = useState([]);
  const [comments, setComment] = useState([]);

  //рефы, которые хранят данные из форм
  let useTextRef = React.createRef();
  let useNameRef = React.createRef();

  //сохраняет данные из форм в массив
  let handleChange = (event) => {
    event.preventDefault();

    let comment = useTextRef.current.value;
    let values = [...comments, comment];
    setComment(values);

    let name = useNameRef.current.value;
    let namesArray = [...names, name];
    setName(namesArray);

    useNameRef = "";
    useTextRef = "";
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
      <div>
        {/*Поле для имени*/}
        <label htmlFor="name">Имя</label>
        <FormText
          as={"input"}
          type="text"
          name="name"
          id="name"
          defaultValue="User"
          placeholder="Имя"
          ref={useNameRef}
          className="form-control"
        />
      </div>

      {/*поле для комментария*/}
      <div>
        <label htmlFor="comment">Комментарий</label>
        <FormText
          as={"textarea"}
          name="comment"
          id="comment"
          placeholder="Комментарий"
          defaultValue=""
          ref={useTextRef}
          className="form-control"
        />
      </div>

      {/*//кнопка для сохранения данных в массив*/}
      <Button as={Col} variant="success" onClick={handleChange}>
        Отправить
      </Button>

      <div className="commentField">
        {" "}
        {nameField} {commentField}{" "}
      </div>
    </>
  );
};

export default Form;