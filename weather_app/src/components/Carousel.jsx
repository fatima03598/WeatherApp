import { useRef } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function HourForecastList({ items = [] }) {
  const carousel = useRef(null);
  const scrollConstant = useRef(500);

  const handleScrollLeft = () => {
    if (carousel.current) {
      carousel.current.scroll({
        left: carousel.current.scrollLeft - scrollConstant.current,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (carousel.current) {
      carousel.current.scroll({
        left: carousel.current.scrollLeft + scrollConstant.current,
        behavior: "smooth",
      });
    }
  };

  const cardList = items.map((item, index) => (
    <li className="h-4/5" key={index}>
      {item}
    </li>
  ));
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      <IconButton
        aria-label="delete"
        onClick={handleScrollLeft}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          zIndex: 9,
        }}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} size="lg" />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={handleScrollRight}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          zIndex: 9,
        }}
      >
        <FontAwesomeIcon icon={faCircleChevronRight} size="lg" />
      </IconButton>
      <div
        className="h-full w-full items-center"
        ref={carousel}
        style={{
          overflowX: "scroll",
          display: "flex",
          listStyleType: "none",
        }}
      >
        {cardList}
      </div>
    </div>
  );
}

HourForecastList.propTypes = {
  items: PropTypes.array,
};
