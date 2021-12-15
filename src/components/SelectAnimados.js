import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");

  const baseUrl = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="departamento"
        url={baseUrl}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipio"
          url={`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${state}`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      <pre>
        <code>
          {state} - {town}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
