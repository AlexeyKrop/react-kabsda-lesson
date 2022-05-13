import React from "react";
import {AccordionMenu} from "./AccordionMenu";
import {UserType} from "../../App";

type AccordionPropsType = {
  user: Array<UserType>
  showUserName: (id: number) => void
  titleValue: string,
  collapsed: boolean;
  setAccordionCollapsed: (collapsed: boolean) => void
}

function AccordionM(props: AccordionPropsType) {
  return (
    <>
    <div onClick={() => {
      props.setAccordionCollapsed(!props.collapsed)
    }} className={'menu__header'}>
      <h2 className={'menu__title'} >{props.titleValue}</h2>
      <svg className={'menu__icon'} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="32" height="32">
        <path
          d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
      </svg>
    </div>
      {!props.collapsed && <AccordionMenu title={props.titleValue} showUserName={props.showUserName} collapsed={props.collapsed} setAccordionCollapsed={props.setAccordionCollapsed} user={props.user}/>}
      {/*<Rating value = {0} />*/}
      {/*<Rating value = {1} />*/}
      {/*<Rating value = {2} />*/}
      {/*<Rating value = {3} />*/}
      {/*<Rating value = {4} />*/}
    </>
  )
}
const Accordion = React.memo(AccordionM)
export default Accordion