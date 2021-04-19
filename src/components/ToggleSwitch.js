const ToggleSwitch = (props) => {
  const { onToggle, isSelected, children } = props;

  return (
    <label className={(isSelected ? "checked " : " ") + "toggle-switch"}>
      <input type="checkbox" onClick={onToggle} checked={isSelected} />
      <span className="toggle-switch__slider" />
      {children && <span className="toggle-switch__label">{children}</span>}
    </label>
  );
};

export default ToggleSwitch;
