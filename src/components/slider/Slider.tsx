import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
   return (
      <StyledSlider>
         <FlexWrapper>
            <Slide>
               <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo numquam placeat voluptatem.
                  Aspernatur dignissimos dolores, expedita illum iste magnam modi neque porro possimus quae quibusdam
                  sapiente sed tenetur unde.
               </Text>
               <Name>Ivan Ivanov</Name>
            </Slide>
         </FlexWrapper>
         <Pagination>
            <span></span>
            <span></span>
            <span></span>
         </Pagination>
      </StyledSlider>
   );
};

const StyledSlider = styled.div`
    max-width: 500px;
    background-color: #a8b1ec;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p``

const Name = styled.span``

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background-color: #b42ecc;
    }
`

