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
                placeholder='Введите имя'
                value={name}
                onChange={this.handleChange}/>

                {/*поле для комментария*/}
                <label htmlFor='comment'>Комментарий</label>
                <input
                type='text'
                name='comment'
                id='comment'
                placeholder='Введите комментарии'
                value={comment}
                onChange={this.handleChange}
                />
            </form>

        )
    }
}

export default Form;