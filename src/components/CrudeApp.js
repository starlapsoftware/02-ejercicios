
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import React, { useState } from 'react';






const initialDB= [
    {
        first : "Pedro",
        lastname: "Gonzalez",
        id :1

    } ,
    {
        first : "Juan",
        lastname: "Gomez",
        id :2

    }
    ,
    {
        first : "Luiz ",
        lastname: "Martinez",
        id :3

    }
    ,
    {
        first : "Gloria",
        lastname: "Rodriguez",
        id :4

    }
    ,
    {
        first : "Ana",
        lastname: "Pedraza",
        id :5

    }
    ,
    {
        first : "Jose",
        lastname: "Martinez",
        id :6

    }

]






const CrudeApp = () => {

    const [db, setDb] = useState(initialDB);


    const createElement = (data)=>{
        data.id=Date.now();
        setDb([...db, data]);
    }


    return (
        <>
         <h1>Ejercicios Crude app</h1>   
         <CrudForm createElement={createElement}/>
         <CrudTable data ={db}/>
        </>
    )
}

export default CrudeApp
