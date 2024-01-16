import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg1 from "../../../assets/images/project-1.webp"
import socialImg2 from "../../../assets/images/project-2.webp"
import socialImg3 from "../../../assets/images/project-3.webp"
import socialImg4 from "../../../assets/images/project-4.webp"

const worksItems = ["All", "Landing pages", "React"]

export const Works = () => {
   return (
      <StyledWorks>
         <SectionTitle>My Works</SectionTitle>
         <Menu menuItems={worksItems}></Menu>
         <FlexWrapper justify={"space-around"} wrap={"wrap"}>
            <Work title={"проект 1"}
                  text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                  src={socialImg1}
                  link={"#"}
            />
            <Work title={"проект 2"}
                  text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                  src={socialImg2}
                  link={"#"}
            />
            <Work title={"проект 3"}
                  text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                  src={socialImg3}
                  link={"#"}
            />
            <Work title={"проект 4"}
                  text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                  src={socialImg4}
                  link={"#"}
            />
         </FlexWrapper>
      </StyledWorks>
   );
};

const StyledWorks = styled.section`
    min-height: 400px;
    background-color: rgb(192, 234, 198);
`