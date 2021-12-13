import React from 'react'

const CrudTableRow = ({el, setDataToEdit,deleteElement}) => {
    let {firstname,lastname,id}=el;
    return (
        <>
            <tr>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td><button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteElement(id)}>Eliminar</button></td>
            </tr>
        </>
    )
}

export default CrudTableRow
