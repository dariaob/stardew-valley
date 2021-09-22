import React from "react";

//принимает объект systemName и выводит заголовки таблицы с системными требованиями
const TableH = (props) => {
    const head = props.headData.map((head, i) => {
        return (
            <th key={i}>
                <td>{head.os}</td>
            </th>
        )
    })
return <thead>{head}</thead>
}

//проходится по объекту systemData и выводит данные в тело таблицы
const TableB = (props) => {
    const body = props.bodyData.map((body, i) => {
        return (
            <tr key={i}>
                <td>{body.system.map((data) => {  //Так как список систем является массивом объектов, то также проходимся по этому массиву
                   return(<td key={data.index}>{data.os}</td>)
                })}</td>
                <td>{body.processor}</td>
                <td>{body.memory}</td>
                <td>{body.graphics.map((graphics) => { //Список требований для графики является массивом объектов, необходимо пройтись
                    return (<td key={graphics.index}>{graphics.graphics}</td>)
                }) }</td>
                <td>{body.storage}</td>
            </tr>
        )
    })
    return (
        <tbody>{body}</tbody>
    )
}

//
class Requirement extends React.Component {
    render() {
    const {headData} = this.props
    const {bodyData} = this.props
        return (
                <table>
                    <TableH headData = {headData}/>
                    <TableB bodyData = {bodyData}/>
                </table>
            )
        }


}

export default Requirement;