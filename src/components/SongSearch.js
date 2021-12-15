import Loader from "./Loader";
import SongDetails from "./SongDetails"
import SongForm from "./SongForm"
import React, { useState, useEffect } from 'react';


const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [artist, setArtist] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSearch=(data)=>{
       setSearch(data);
    }


    return (
        <div>
            <h2>Buscador de canciones</h2>
            
            <hr/>
            <SongForm handleSearch={handleSearch}/>
            <hr/>
            {loading && <Loader/>}
            <hr/>
            <SongDetails/>
        </div>
    )
}

export default SongSearch
