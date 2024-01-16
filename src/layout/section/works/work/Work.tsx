import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
   title: string
   text: string
   src: string
   link: string
}

export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <Image src={props.src} alt=""/>
         <Title>{props.title}</Title>
         <Text>{props.text}</Text>
         <Link href={props.link}>Look It Up</Link>
      </StyledWork>
   );
};

const StyledWork = styled.div`
    background-color: #8695f1;
    max-width: 500px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p``

const Link = styled.a``