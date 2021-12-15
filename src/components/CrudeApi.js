
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import React, { useState , useEffect} from 'react';
import {helpHttp} from '../helper/helpHttp'
import Loader from "./Loader";
import Message from "./Message";

const CrudeApi = () => {

    const [dataToEdit, setDataToEdit] = useState(null);
    const [db, setDb] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let api = helpHttp();
    let url="http://localhost:5000/empleados";
    



    useEffect(() => {
        setLoading(true);
        helpHttp()
          .get(url)
          .then((res) => {
            //console.log(res);
            if (!res.err) {
              setDb(res);
              setError(null);
            } else {
              setDb(null);
              setError(res);
            }
            setLoading(false);
          });
      }, [url]);




      const createElement = (data) => {
        data.id = Date.now();
        //console.log(data);
    
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        api.post(url, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            setDb([...db, res]);
          } else {
            setError(res);
          }
        });
      };
      const updateElement = (data) => {
        let endpoint = `${url}/${data.id}`;
        //console.log(endpoint);
    
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };
    
        api.put(endpoint, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
          } else {
            setError(res);
          }
        });
      };
      const deleteElement = (id) => {
        let isDelete = window.confirm(
          `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );
    
        if (isDelete) {
          let endpoint = `${url}/${id}`;
          let options = {
            headers: { "content-type": "application/json" },
          };
    
          api.del(endpoint, options).then((res) => {
            //console.log(res);
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
              setDb(newData);
            } else {
              setError(res);
            }
          });
        } else {
          return;
        }
      };


    return (
        <div>
        <h2>CRUD API</h2>
        <article className="grid-1-2">
          <CrudForm
            createElement={createElement}
            updateElement={updateElement}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          )}
          {db && (
            <CrudTable
              data={db}
              setDataToEdit={setDataToEdit}
              deleteElement={deleteElement}
            />
          )}
        </article>
      </div>
    )
}

export default CrudeApi
