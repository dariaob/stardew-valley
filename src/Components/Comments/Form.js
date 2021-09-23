import React from "react";

class Form extends React.Component {
    //Поля для формы
    formState = {
        name:'',
        comment: ''
    }
    state = this.formState;

    //обработчик события
    handleChange = (event) => {
        //обозначаем целевой элемент
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }
    render() {
        const {name, comment} = this.state
        return (
            <form>
                {/*Поле для имени*/}
                <label htmlFor='name'>Имя</label>
                <input
                type='text'
                name='name'
                id='name'
                placeholder='Имя'
                value={name}
                onChange={this.handleChange}/>

                {/*поле для комментария*/}
                <label htmlFor='comment'>Комментарий</label>
                <input
                type='text'
                name='comment'
                id='comment'
                placeholder='Комментарий'
                value={comment}
                onChange={this.handleChange}
                />
                <button type='submit'>Отправить</button>
            </form>
        )
    }
}

export default Form;