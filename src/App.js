import CrudeApi from "./components/CrudeApi";
import CrudeApp from "./components/CrudeApp";
import SongSearch from "./components/SongSearch";



function App() {
  return (
    <>
     <h2>Ejercicios con react</h2>
     <hr/>
      <SongSearch/>
     <hr/>
     <CrudeApi/>
      <hr/>
     <CrudeApp/>
    </>
  );
}

export default App;
