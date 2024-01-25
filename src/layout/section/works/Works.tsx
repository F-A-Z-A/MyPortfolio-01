import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg1 from "../../../assets/images/project-1.webp"
import socialImg2 from "../../../assets/images/project-2.webp"
import socialImg3 from "../../../assets/images/project-3.webp"
import socialImg4 from "../../../assets/images/project-4.webp"
import {Container} from "../../../components/container";

const worksItems = ["All", "Landing pages", "React"]

export const Works = () => {
   return (
      <StyledWorks>
         <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"} align={"flex-start"} rowGap={"100px"} wrap={"wrap"}>
               <Work title={"project 1"}
                     text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                     src={socialImg1}
                     link={"#"}
               />
               <Work title={"project 2"}
                     text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                     src={socialImg2}
                     link={"#"}
               />
               <Work title={"project 3"}
                     text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                     src={socialImg3}
                     link={"#"}
               />
               <Work title={"project 4"}
                     text={"Краткое описание проекта. Краткое описание проекта. Краткое описание проекта. Краткое описание проекта."}
                     src={socialImg4}
                     link={"#"}
               />
            </FlexWrapper>
         </Container>
      </StyledWorks>
   );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`