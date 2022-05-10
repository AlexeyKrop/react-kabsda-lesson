import React from "react";

export function UnControlAccordionMenu(props: any) {
  const styleBlock = {
    display: props.on ? 'block' : 'none'
  }
  return (
    <ul style={styleBlock} className="menu">
      <li className="menu__list">1</li>
      <li className="menu__list">2</li>
      <li className="menu__list">3</li>
    </ul>
  )
}