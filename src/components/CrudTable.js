import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data}) => {
    return (
        <>
          <table>
            <tr>
                <th>Primer nombre</th>
                <th>Segundo nombre</th>
                <th>Acciones</th>
            </tr>
            
            <tbody>
                {data.length===0?
                (
                <tr><td colSpan="3">Sin Satos</td></tr>
                ) : 
                (    
                    data.map(el=> <CrudTableRow key={el.id} el={el}/>)
                )}
            </tbody>  
            </table>  
        </>
    )
}

export default CrudTable;