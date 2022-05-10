import React from "react";
import {UserType} from "../../App";

type AccordionMenuType = {
  user: Array<UserType>
  title: string
  collapsed: boolean
  showUserName: (id: number) => void
  setAccordionCollapsed: (collapsed: boolean) => void
}

export function AccordionMenu(props: AccordionMenuType) {
  const onClickMenuListHandler = (id: number) => {
    props.showUserName(id)
    props.setAccordionCollapsed(!props.collapsed)
  }
  return (
    <ul className="menu">
      {props.user.map(u => <li onClick={() => {
        onClickMenuListHandler(u.id)
      }} key={u.id} className="menu__list">{u.name}</li>)}
    </ul>
  )
}