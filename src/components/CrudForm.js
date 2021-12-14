import React from 'react'


const initialData={
    first:"",
    lastname:"",
    id:null

}



const CrudForm = ({createElement}) => {

    const [form, setForm] = useState(initialData);

    const handlerOnSummit = (e) => {
        e.preventDefault();
        if(!form.first || !form.lastname)
        {
            alert("Datos incompletos");
            return;
        }
        else{
            createElement(form);
        }


    }
    const handlerOnChange = (e) => {
        setForm({
            ...form, [e.target.name] : e.target.value,
        });
       
    }
    const handlerLimpliar = () => {
        setForm(initialData);        
    }


    return (
        <>
        <form onSubmit={handlerOnSummit}>
         <input onChange={handlerOnChange} type="text" name="firstname" placeholder='Primer nombre'/> 
         <input onChange={handlerOnChange} type="text" name="lastname" placeholder='Segundo nombre'/>
         <input  type="submit"  value="Enviar" />
         <input type="reset"  value="Limpliar"/>        
            
        </form>           
        </>
    )
}

export default CrudForm;
