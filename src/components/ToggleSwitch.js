const ToggleSwitch = (props) => {
  const { onToggle, isSelected } = props;
  return (
    <label className={(isSelected ? "checked " : " ") + "switch"}>
      <input type="checkbox" onClick={onToggle} checked={isSelected} />
      <span className="toggle-switch__slider slider" />
    </label>
  );
};

export default ToggleSwitch
