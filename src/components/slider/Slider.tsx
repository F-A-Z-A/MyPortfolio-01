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
               <Name>@ Ivan Ivanov</Name>
            </Slide>
         </FlexWrapper>
         <Pagination>
            <span></span>
            <span className={"active"}></span>
            <span></span>
         </Pagination>
      </StyledSlider>
   );
};

const StyledSlider = styled.div`
    max-width: 500px;
    //background-color: #a8b1ec;
    //border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 22px;
`

const Name = styled.span`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 42px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #18cdf8;

        & + span {
            margin-left: 5px;
        }

        & + .active {
            background-color: #f81818;
            width: 30px;
        }
    }
`

