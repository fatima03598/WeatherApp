import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LocationsLists from "./LocationsList";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function LocationSearchBar({ location, onLocationChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //get options on location change
  const { data } = useFetch(
    "/search",
    { queryParams: { name: searchValue, count: 10, format: "json" } },
    [searchValue]
  );

  useEffect(() => {
    if (data?.results) {
      setSuggestions(data.results);
    } else setSuggestions([]);
  }, [data]);

  const handleChangeSearchVal = (val) => {
    //reset location selected
    onLocationChange(null);

    //update search value
    setSearchValue(val);
  };

  const selectLocation = (locationData) => {
    //update location
    onLocationChange(locationData);
    //empty suggestions
    setSuggestions([]);
  };

  return (
    <>
      <div className="flex flex-col w-fill items-center">
        <TextField
          type="text"
          variant="outlined"
          placeholder="Search…"
          className=" input input-secondary input-bordered w-3/4"
          value={
            location ? `${location.name}, ${location.country}` : searchValue
          }
          onChange={(e) => handleChangeSearchVal(e.target.value)}
        />

        <div className="w-3/4">
          <LocationsLists
            options={suggestions}
            onSelectedLocation={selectLocation}
          />
        </div>
      </div>
    </>
  );
}

LocationSearchBar.propTypes = {
  location: PropTypes.object,
  onLocationChange: PropTypes.func,
};
