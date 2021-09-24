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

    //добавление комментов в formstate
    onSubmit = (event) => {
        //чтобы страница не перезагружалась
        event.preventDefault()

        this.props.handleSubmit(this.state)
        this.setState(this.formState)
        alert(`Думаешь, что ${this.state.comment}? Хм...`)

    }
    render() {
        const {name, comment} = this.state
        return (
            <form onSubmit={this.onSubmit}>
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

                <div className='commentField'>{this.formState.comment}</div>
            </form>


        )
    }
}

export default Form;