import React from 'react'

const CrudTableRow = ({el, setDataToEdit}) => {
    let {firstname,lastname,id}=el;
    return (
        <>
            <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td><button onClick={() => setDataToEdit(el)}>Editar</button>
                <button>Modificar</button></td>
            </tr>
        </>
    )
}

export default CrudTableRow
