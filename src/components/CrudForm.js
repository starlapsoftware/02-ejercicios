import React, { useState, useEffect } from 'react';


const initialElement={
    firstname:"",
    lastname:"",
    id:null

}
const CrudForm = ({createElement, updateElement, dataToEdit, setDataToEdit}) => {
    
    const [form, setForm] = useState(initialElement);

    useEffect(() => {
        if(dataToEdit)
        {
            setForm(dataToEdit);
        }
        else{
            setForm(initialElement);
        }
    }, [dataToEdit]);

    const handlerOnSummit = (e) => {
        e.preventDefault();

        if(!form.firstname || !form.lastname)
        {
            alert("datos incompletos");
            return;
        }
        else{
            if(form.id===null)
            {
                createElement(form);                
            }
            else{
                updateElement(form)
            }
        }
        handlerLimpliar();       


    }
    const handlerOnChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value,
        });
    }
    const handlerLimpliar = (e) => {
        setForm(initialElement);
        setDataToEdit(null);
    }


    return (
        <>
        <form onSubmit={handlerOnSummit}>
         <input onChange={handlerOnChange} type="text" name="firstname" placeholder='Primer nombre' value={form.firstname}/> 
         <input onChange={handlerOnChange} type="text" name="lastname" placeholder='Segundo nombre'value={form.lastname}/>
         <input  type="submit"  value="Enviar" />
         <input onClick={handlerLimpliar} type="reset"  value="Limpliar"/>        
            
        </form>           
        </>
    )
}
export default CrudForm