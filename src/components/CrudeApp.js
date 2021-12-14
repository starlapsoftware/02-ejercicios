
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import React, { useState } from 'react';






const initialDB= [
    {
        firstname : "Pedro",
        lastname: "Gonzalez",
        id :1

    } ,
    {
        firstname : "Juan",
        lastname: "Gomez",
        id :2

    }
    ,
    {
        firstname : "Luiz ",
        lastname: "Martinez",
        id :3

    }
    ,
    {
        firstname : "Gloria",
        lastname: "Rodriguez",
        id :4

    }
    ,
    {
        firstname : "Ana",
        lastname: "Pedraza",
        id :5

    }
    ,
    {
        firstname : "Jose",
        lastname: "Martinez",
        id :6

    }

]






const CrudeApp = () => {

  const [dataToEdit, setDataToEdit] = useState(null);

    const [db, setDb] = useState(initialDB);


    const createElement = (data)=>{
        data.id=Date.now();
        setDb([...db, data]);
    }


    return (
        <>
         <h1>Ejercicios Crude app</h1>   
         <CrudForm createElement={createElement} updateElement={updateElement} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
         <CrudTable data ={db} setDataToEdit={setDataToEdit} deleteElement={deleteElement}/>
        </>
    )
}

export default CrudeApp
