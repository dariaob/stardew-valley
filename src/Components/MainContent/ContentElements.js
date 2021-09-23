import React from "react";

const systemData = [{system: [{os: 'Windows 7 / 8 / 10', index: 1}, {os: 'OS X 10.10 or later', index: 2}, {os:'Ubuntu 14.04, 16.04 or newer', index: 3}],
    processor: '2 Ghz',
    memory: '2 GB RAM',
    graphics: [{graphics: '256 MB video memory, shader model 3.0+', index: 1},
        {graphics: '256 mb video memory, OpenGL 2 , Supported resolution: minimum 1280x1024 (for 4:3 aspect ratio) or 1280x720 (for 16:9)', index: 2},
        {graphics:'256 mb video memory, OpenGL 2', index: 3}],
    storage: '500 MB available space'
}];

const systemName = [{name: 'Операционная система'}, {name:'Процессор'}, {name: "Оперативная память"} ,{name:'Графика'}, {name: 'Память'}]


//принимает объект systemName и выводит заголовки таблицы с системными требованиями
let SysName = systemName.map((os, i) => {
        return (
            <th key={i}>
                <tr>{os.name}</tr>
            </th>
        )
    })


//проходится по объекту systemData и выводит данные в тело таблицы
const TableB = () => {
    const body = systemData.map((body, i) => {
        return (
            <tr key={i}>
                <div className='table'>{body.system.map((data) => {  //Так как список систем является массивом объектов, то также проходимся по этому массиву
                   return(<td key={data.index}>{data.os}</td>)
                })}</div>
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


function TableH() {
    return <thead>{SysName}</thead>;
}

//получает данные из TableH и TableB и передает их в таблицу
class Requirement extends React.Component {
    render() {
        let {bodyData} = this.props
        return (
                <table>
                    <TableH headData = {bodyData}/>
                    <TableB bodyData = {bodyData}/>
                </table>
            )
        }
}

export default Requirement;