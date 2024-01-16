import React from 'react';
import {Icon} from "../icons/Icon";
// import logoImg from "../../assets/images/logo.svg"

export const Logo = () => {
   return (
      <a href="#">
         <Icon iconId={'logoIcon'} width={"185"} height={"48"} viewBox={"0 0 185 48"}/>
         {/*<img src={logoImg}/>*/}
      </a>
   );
};