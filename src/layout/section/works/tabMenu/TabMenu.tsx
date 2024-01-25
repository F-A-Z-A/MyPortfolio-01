import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

// type MenuPropsType = {
//    menuItems: Array<string>
// }
// и дальше надо было писать
// export const TabMenu = (props: MenuPropsType) => {}
// вместо этой типизации, сразу в const TabMenu, в props укзали что должно прийти

export const TabMenu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledTabMenu>
         <ul>
            {props.menuItems.map((item, index) => {
               return <ListItem key={index}>
                  <Link href="">{item}</Link>
               </ListItem>
            })}
         </ul>
      </StyledTabMenu>
   );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        //gap: 50px;
        justify-content: space-between;
        margin: 0 auto 50px;
        max-width: 352px;
        width: 100%;
    }
`

const ListItem = styled.li`

`

