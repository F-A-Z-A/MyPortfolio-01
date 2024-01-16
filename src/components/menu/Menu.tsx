import React from 'react';
import styled from "styled-components";

// type MenuPropsType = {
//    menuItems: Array<string>
// }
// и дальше надо было писать
// export const Menu = (props: MenuPropsType) => {}
// вместо этой типизации, сразу в const Menu, в props укзали что должно прийти

export const Menu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledMenu>
         <ul>
            {props.menuItems.map((item, index) => {
               return <li key={index}>
                  <a href="">{item}</a>
               </li>
            })}
         </ul>
      </StyledMenu>
   );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`