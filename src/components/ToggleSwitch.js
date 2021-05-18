const ToggleSwitch = (props) => {
  const { onToggle, btnColor, isSelected, children } = props;

  return (
    <label
      className={
        "toggle-switch" +
        (btnColor ? " toggle-switch--" + btnColor : " toggle-switch--default") +
        (isSelected ? " checked " : "")
      }
    >
      <input type="checkbox" onClick={onToggle} checked={isSelected} />
      <span className="toggle-switch__slider" />
      {children && <span className="toggle-switch__label">{children}</span>}
    </label>
  );
};

export default ToggleSwitch;
