import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icons/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
   return (
      <StyledTestimony>
         <SectionTitle>Testimony</SectionTitle>
         <FlexWrapper direction={"column"} align={"center"}>
            {/*<Icon iconId={"testimony"} width="105" height="100" viewBox="0 0 105 100"/>*/}
            <Icon iconId={"testimony"} width="100" height="100" viewBox="0 0 520 520"/>
            <Slider/>
         </FlexWrapper>
      </StyledTestimony>
   );
};

const StyledTestimony = styled.section``