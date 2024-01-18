import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container";
import {myTheme} from "../../../styles/Theme";

export const Contacts = () => {
   return (
      <StyledContact>
         <Container>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
               <Field placeholder={"name"}/>
               <Field placeholder={"subject"}/>
               <Field placeholder={"message"} as={"textarea"}/>
               <Button type={"submit"}>Send message</Button>
            </StyledForm>
         </Container>
      </StyledContact>
   );
};

const StyledContact = styled.section`

`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
        margin-bottom: 50px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${myTheme.colors.borderColor};
    background-color: ${myTheme.colors.secondaryBg};
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    color: ${myTheme.colors.font};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;

    &::placeholder {
        color: ${myTheme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${myTheme.colors.borderColor};
    }
`