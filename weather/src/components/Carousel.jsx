import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Carousel({ items = [] }) {
  const carousel = useRef(null);
  const scrollConstant = useRef(500);
  const [rightEnd, setRightEnd] = useState(false);
  const [leftEnd, setLeftEnd] = useState(false);

  //function to update scroll end of an element when scrolling
  const handleOnScroll = () => {
    const elem = carousel.current;
    if (parseInt(elem.scrollLeft) === 0) {
      setLeftEnd(true);
    } else setLeftEnd(false);

    if (
      parseInt(elem.scrollWidth - elem.clientWidth) ===
      parseInt(elem.scrollLeft)
    ) {
      setRightEnd(true);
    } else setRightEnd(false);
  };

  useEffect(() => {
    handleOnScroll();
  }, []);

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
  return (
    <div style={{ position: "relative" }} className="h-full w-full">
      <IconButton
        aria-label="delete"
        disabled={leftEnd}
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
        disabled={rightEnd}
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
        className="h-full w-full items-center hide-scroll"
        onScroll={handleOnScroll}
        ref={carousel}
        style={{
          overflowX: "scroll",
          display: "flex",
          listStyleType: "none",
        }}
      >
        {items}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.array,
};
