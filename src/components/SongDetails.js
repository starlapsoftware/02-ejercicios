import SongArtist from "./SongArtist"
import SongLyrics from "./SongLyrics"

const SongDetails = () => {
    return (
        <div>
            <h2>Detalle busqueda</h2>
            <hr/>
            <SongArtist/>
            <hr/>
            <SongLyrics/>
        </div>
    )
}

export default SongDetails
