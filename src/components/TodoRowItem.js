function TodoRowItem(props) {


    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td><button className="btn btn-danger" >Delete</button></td>
        </tr>
    )
}

export default TodoRowItem