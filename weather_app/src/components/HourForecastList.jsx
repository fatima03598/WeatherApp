import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function HourForecastList({ forcecastData = null }) {
  useEffect(() => {
    if (forcecastData) {
      console.log(forcecastData);
    }
  }, [forcecastData]);

  if (!forcecastData) {
    return null;
  }
  // const listItems = options.map((option) => (
  //   <li
  //     key={option.id}
  //     onClick={() => onSelectedLocation(option)}
  //   >
  //     <button>
  //       {option.name}, {option.country}
  //     </button>
  //   </li>
  // ));
  return (
    <></>
    //   <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
    //     {listItems}
    //   </ul>
  );
}
