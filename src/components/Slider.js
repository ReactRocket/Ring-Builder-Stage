import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./resources/css/Slider.css";

const test = () => {};

const Slider = ({ min = 1, max = 100, onChange = { test }, data = [] }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    //onChange({ min: minVal, max: maxVal });
    //console.log("minVal, maxVal:", minVal, maxVal);
    console.log("min:", minVal, " max:", maxVal);
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />{" "}
        {data.length > 0 && Array.from({ length: max }, (_, index) => (
          <span
            key={index}
            className={`absolute left-[${
              (100 / max) * (index + 1)
            }%] z-10 text-white font-bold`}
          >
            |
          </span>
        ))}
        <div ref={range} className="slider__range" />
      </div>
      <>
        {data.length > 0 ? (
          <div className="w-full flex justify-center items-center">
            {data?.map((val) => {
              return <span className="py-5 w-full text-center">{val}</span>;
            })}
          </div>
        ) : (
          <div className="values">
            <input
              className="slider__left-value "
              onChange={(e) =>
                minVal > min && minVal < max && setMinVal(e.target.value)
              }
              value={minVal}
              type="number"
            />
            <input
              className="slider__right-value"
              onChange={(e) =>
                maxVal > min && maxVal < max && setMaxVal(e.target.value)
              }
              value={maxVal}
              type="number"
            />
          </div>
        )}
      </>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
