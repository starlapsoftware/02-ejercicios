import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data, setDataToEdit,deleteElement}) => {
    return (
        <>
          <table>
            <tr>
                <th>Primer nombre</th>
                <th>Segundo nombre</th>
                <th>Acciones</th>
            </tr>
            
            <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteElement={deleteElement}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
            </table>  
        </>
    )
}

export default CrudTable;
