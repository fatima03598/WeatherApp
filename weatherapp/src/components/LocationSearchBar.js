import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LocationsLists from "./LocationsList";

export default function LocationSearchBar() {
  const [location, setLocation] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //get options on location change
  const { data, error } = useFetch(
    "v1/search",
    { queryParams: { name: searchValue }, count: 10, format: "json" },
    [searchValue]
  );

  useEffect(() => {
    //console.log(data);
    if (data?.results) {
      setSuggestions(data.results);
    } else setSuggestions([]);
  }, [data]);

  const handleChangeSearchVal = (val) => {
    //reset location selected
    setLocation(null);

    //update search value
    setSearchValue(val);
  };

  const selectLocation = (locationData) => {
    //update location
    setLocation(locationData);
    //empty suggestions
    setSuggestions([]);
  };

  return (
    <>
      <div className="flex flex-col w-fill items-center ">
        <input
          type="text"
          placeholder="Search…"
          className=" input input-secondary input-bordered w-3/4"
          value={
            location ? `${location.name}, ${location.country}` : searchValue
          }
          onChange={(e) => handleChangeSearchVal(e.target.value)}
        />

        <div className="w-3/4  ">
          <LocationsLists
            options={suggestions}
            onSelectedLocation={selectLocation}
          />
        </div>
      </div>
    </>
  );
}
