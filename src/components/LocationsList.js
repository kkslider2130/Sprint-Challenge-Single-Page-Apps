import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import Axios from "axios";
import { Container, Row } from "reactstrap";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState([]);
  const [LocationQuery, setLocationQuery] = useState("");

  const handleChange = event => {
    setLocationQuery(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data);
        const locations = res.data.results.filter(a =>
          a.name.toLowerCase().includes(LocationQuery.toLowerCase())
        );
        setLocation(locations);
        console.log(locations);
      })
      .catch(err => console.log(err.response));
  }, [LocationQuery]);

  return (
    <Container>
      <form className="searchBar">
        <input
          type="text"
          onChange={handleChange}
          value={LocationQuery}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by location"
          autoComplete="off"
        />
      </form>

      <Row>
        {location.map(a => {
          return (
            <LocationCard
              name={a.name}
              type={a.type}
              dimension={a.dimension}
              id={a.episidode}
            />
          );
        })}
      </Row>
    </Container>
  );
}
