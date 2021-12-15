import React, { useState, useEffect } from 'react';

const initialForm ={
    artist:"",
    song:"",

}

const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm);

    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        }
        );
    };

    const handleSubmint =(e)=>{
        e.preventDefault();
        if(!form.artist || !form.song)
        {
            alert("Datos incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm);

    };


    return (
        <form onSubmit={handleSubmint}>
            <input  type="text" name="artist" placeholder='Nombre del artista' value={form.artist} onChange={handleChange}/>
            <input  type="text" name="song" placeholder='Nombre de la cancion' valuel={form.song} onChange={handleChange} />
            <input  type="submit" value="buscar" />
        </form>
    )
}

export default SongForm
