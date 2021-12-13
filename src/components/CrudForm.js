import React from 'react'

const CrudForm = () => {


    const handlerOnSummit = () => {

    }
    const handlerOnChange = () => {

    }
    const handlerLimpliar = () => {

    }


    return (
        <>
        <form>
         <input onChange={handlerOnChange} type="text" name="firstname" placeholder='Primer nombre'/> 
         <input onChange={handlerOnChange} type="text" name="lastname" placeholder='Segundo nombre'/>
         <input  type="submit"  value="Enviar" />
         <input type="reset"  value="Limpliar"/>        
            
        </form>           
        </>
    )
}

export default CrudForm;
