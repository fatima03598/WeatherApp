import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LocationsLists from "./LocationsList";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

  const resetLocation = () => {
    onLocationChange(null);
    setSuggestions([]);
  };

  return (
    <>
      <div className="flex flex-col w-fill items-center">
        <div className="w-3/4 relative">
          <TextField
            type="text"
            variant="outlined"
            placeholder="Search…"
            className=" input input-secondary input-bordered w-full"
            value={
              location ? `${location.name}, ${location.country}` : searchValue
            }
            onChange={(e) => handleChangeSearchVal(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            style={{ color: "#c3c4d8" }}
            onClick={resetLocation}
            className="absolute right-2  top-1/4 cursor-pointer"
          />
        </div>

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
