import React from "react";

const GENERIC_ERRO = "An error happened when the research request was being the search";

function LocationSearchTable() {
  const [value, setValue] = React.useState('');
  const [locations, setLocations] = React.useState([]);
  const [message, setMessage] = React.useState('');

  const handleClick = async (event) => {
    try {
      const response = await fetch(`http://localhost:3000/locations?q=${value}`);
      if (!response) {
        setMessage(GENERIC_ERRO);
        return;
      }

      const data = await response.json();

      if (data !== undefined && response.status === 200) {
        setLocations(data);
        setMessage("");
        return;
      }

      setLocations([]);
      setMessage(data.message);

    } catch (error) {
      setMessage(GENERIC_ERRO);
      setLocations([]);
    }
  };

  return (
    <div>
      <span style={{color: "red"}}>{message}</span><br />
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        label="Search"
        value={value}
        onChange={(props) => {
          if (props && props.target && props.target.value) {
            setValue(props.target.value);
            return;
          } else {
            setValue(props.target.value);
          }
        }}
        style={{ width: 200 }}
      />
      <button type="button" onClick={(event) => handleClick(event)}>Search</button>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {locations.map(location => {
            return (<tr><td>{location}</td></tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default LocationSearchTable;
