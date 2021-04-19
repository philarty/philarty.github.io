import React, { useState, useEffect, useRef } from "react";

const Dropdown = React.forwardRef((props, ref) => {
  const { options, value, placeholder, onChange, disabled, className } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownMenu = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (dropdownMenu.current && dropdownMenu.current.contains(e.target)) {
      return;
    }
    setShowDropdown(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={ref} className={"dropdown" + (className ? " " + className : "")}>
      <button
        ref={dropdownMenu}
        onClick={() => setShowDropdown(true)}
        className={
          "dropdown__input" + (showDropdown ? " dropdown__input--active" : "")
        }
        disabled={disabled}
      >
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className="dropdown__placeholder">
            {placeholder || "Select..."}
          </span>
        )}
      </button>
      {showDropdown && (
        <ol ref={dropdownMenu} className="dropdown__menu">
          {options.map((option) => (
            <button
              className={
                "dropdown__item" +
                (selectedOption === option ? " dropdown__item--active" : "")
              }
              onClick={() => {
                onChange(option.value);
                setShowDropdown(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </ol>
      )}
    </div>
  );
});

export default Dropdown;
