import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {myTheme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
   title: string
   text: string
   src: string
   link: string
}

export const Work = (props: WorkPropsType) => {
   return (
      <StyledWork>
         <ImageWrapper>
            <Image src={props.src} alt=""/>
            <Button>Look It Up</Button>
         </ImageWrapper>
         <Title>{props.title}</Title>
         <Text>{props.text}</Text>
         <Link href={props.link}>Look It Up</Link>
      </StyledWork>
   );
};

const StyledWork = styled.div`
    padding: 25px;
    max-width: 500px;
    width: 100%;
    border-radius: 50px 0;
    border: 1px solid #A39D9D;
    background-color: ${myTheme.colors.secondaryBg};

    ${Link} {
        &::before {
            left: 0;
            right: 0;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 40px;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(3px);
        }

        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

const Image = styled.img`
    width: 100%;
    height: 280px;
    border-radius: 24px 8px 8px 8px;
`

const Title = styled.h3`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 67px;
`


const Text = styled.p`
    text-align: justify;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 50px;
`