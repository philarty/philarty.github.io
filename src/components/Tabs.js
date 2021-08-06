import React, { useState } from "react";

function Tabs(props) {
  const { children: rawChildren, btnColor, btnSize } = props;

  const children = React.Children.toArray(rawChildren);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={
        "tabs" +
        (btnColor ? " tabs--" + btnColor : " tabs--default") +
        (btnSize ? " tabs--" + btnSize : " tabs--md")
      }
    >
      <div className="tabs__header">
        {children.map((tab, index) => (
          <button
            key={tab.props.label}
            onClick={() => {
              setActiveTab(index);
            }}
            className={
              "tabs__tab " + (activeTab === index ? "tabs__tab--selected" : "")
            }
            disabled={tab.props.disabled}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">{children[activeTab].props.children}</div>
    </div>
  );
}

export default Tabs;

export function Tab() {
  return null;
}
