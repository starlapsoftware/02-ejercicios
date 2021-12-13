import React from 'react'

const CrudTableRow = ({el}) => {
    return (
        <>
            <tr>
                <td>{el.first}</td>
                <td>{el.lastname}</td>
                <td><button>Editar</button><button>Modificar</button></td>
            </tr>
        </>
    )
}

export default CrudTableRow
