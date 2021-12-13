
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import React, { useState , useEffect} from 'react';
import {helpHttp} from '../helper/helpHttp'

const CrudeApi = () => {

    const [dataToEdit, setDataToEdit] = useState(null);
    const [db, setDb] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let url="http://localhost:5000/empleados";
    let api=helpHttp();



    useEffect(() => {
       api.get(url).then((res)=> {
           if(!res.err)
           {
                setDb(res);
           }
           else{
               setDb([]);
           }
       });
    }, []);




    const createElement = (data) => {
        data.id=Date.now();
        setDb([...db, data]);
    }
    const updateElement =(data) =>{
        let newdata=db.map((el)=> (el.id===data.id?data:el));
        setDb(newdata);
    }
    const deleteElement=(id)=>{
       let isDelete= window.confirm( `¿Estás seguro de eliminar el registro con el id '${id}'?`);
       if(isDelete)
       {
        let newdata=db.filter((el)=>el.id!==id);
        setDb(newdata);
       }
       else{
           return;
       }
    }


    return (
        <>
         <h1>Ejercicios Crude api</h1>   
         <CrudForm createElement={createElement} updateElement={updateElement} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />

        
         <CrudTable data ={db} setDataToEdit={setDataToEdit} deleteElement={deleteElement}/>
        </>
    )
}

export default CrudeApi
